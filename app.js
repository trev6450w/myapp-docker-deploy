const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World, this is a test from my CI/CD using webhooks!!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
