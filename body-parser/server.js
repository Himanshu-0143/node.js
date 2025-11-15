const express = require('express');
const app = express();

//body parser built-in 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/student', (req, res) => {
  console.log(req.body); // display incoming data 
  res.send('Student data received successfully!');
});
app.listen(3000, () =>
  console.log('Server is running on http://localhost:3000'));

// To test this code, you can use a tool like Postman or cURL to send a POST request to http://localhost:3000/student with a JSON body.