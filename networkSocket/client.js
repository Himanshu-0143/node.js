// const net = require('net');
// const client = net.createConnection({ port: 3000 }, () => {
//   console.log('Connected to server');
//   client.write('Hello Server!\n');
// });
// client.on('data', (data) => {
//   console.log('Received from server:', data.toString());
//   client.end();
// }); 

const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to server');
  client.write('Hello Server!\n');
});

client.on('data', (data) => {
  console.log('Received from server:', data.toString());
  client.end();
});

client.on('error', (err) => {
  console.error('Connection error:', err);
});
