const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('¡Hola desde la app en contenedor!');
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
