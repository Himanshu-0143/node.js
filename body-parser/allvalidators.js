const express = require('express');
const {body, validationResult} = require('express-validator');
const app = express();
const userRouter = express.Router();
// middleware to parse incoming JSON requests
app.use(express.json());
//user routes
userRouter.get('/', (req, res) => {
  res.send('User-Profile');
});
userRouter.post('/register',body('email').isEmail().normalizeEmail(),
body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }
  res.send('User registered successfully!');
});
app.use('/user', userRouter);
app.listen(3000, () =>
  console.log('Server is running on http://localhost:3000'));


//send  POST request to http://localhost:3000/user/register with a JSON body containing email and password fields.