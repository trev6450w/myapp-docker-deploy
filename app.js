const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World, this is a test to see if my webhook is working!!!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
