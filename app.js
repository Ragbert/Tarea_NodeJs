const express = require('express');

const app = express();
const JSON_URL = 'https://www.raydelto.org/agenda.php';

app.get('/', async (req, res) => {
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default(JSON_URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error identificado: ', error);
    res.status(500).json({ error: 'Error' });
  }
});

const port = 8080; 

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});


