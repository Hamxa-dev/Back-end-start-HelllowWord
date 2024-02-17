const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send('kesen hain ap sab');
});

app.get('/about', (req, res) => {
  res.send('Hi! my name is Hamza');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
