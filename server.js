import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
const UserRoute = require('./UserRouter');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/movies').then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', router);

// Handle / route
app.get('/', (req, res) =>
  res.send('Hello World!')
)

//handle user post 
app.use('/user', UserRoute);

// Handle account creation
//app.post('/users', (req, res)=>

//)


const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
