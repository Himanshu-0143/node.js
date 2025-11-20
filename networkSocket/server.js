// const net = require('net');
// const server = net.createServer((socket) => {
//   console.log('Client connected');
//   socket.write('welcome client!\n');
//   socket.on('data', (data) => {
//     console.log('Received from client:', data.toString());
//   });
//   server.listen(3000, () => {
//     console.log('Server listening on port 3000');
//   });
// }); 
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.write('Welcome client!\n');

  socket.on('data', (data) => {
    console.log('Received from client:', data.toString());
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// server.listen must be outside createServer callback
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
