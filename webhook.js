const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

const secret = 'recipeaicicd';

http.createServer((req, res) => {
  req.on('data', chunk => {
    const signature = `sha1=${crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex')}`;
    if (req.headers['x-hub-signature'] == signature) {
      exec('git pull && docker build -t myapp . && docker stop myapp || true && docker rm myapp || true && docker run -d --name myapp -p 80:3000 myapp', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
    }
  });
  res.end();
}).listen(8080);
