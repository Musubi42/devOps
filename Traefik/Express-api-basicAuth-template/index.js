const express = require('express');
require('dotenv').config()
const app = express();

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Traefik, IT WORKS !');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
