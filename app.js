const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <h1>Hello from inside the very basic Node app!!444</h1>
  `);
});

app.listen(80);
console.log('dupa');
