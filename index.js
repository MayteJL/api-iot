// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let registros = [];  // Aquí se guardan los datos temporalmente

// Ruta para recibir datos del ESP32
app.post('/alerta', (req, res) => {
  const data = req.body;
  console.log('Dato recibido:', data);
  registros.push(data);
  res.status(200).json({ mensaje: 'Registro guardado con éxito' });
});

// Ruta para ver los registros desde navegador
app.get('/alerta', (req, res) => {
  res.json(registros);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
