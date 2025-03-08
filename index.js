const express = require('express')
const mongoose = require('mongoose')
const morgan = require ('morgan')
const bodyParser = require('body-parser')

require('dotenv').config();


const app = express()
const cors = require('cors')
app.use(cors()); 

// Routes
const AuthRoute = require ('./routers/Auth')


// Middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/uploads/images", express.static("uploads/images"));


                                                                                                                                                                                                           
// MongoDB connection
  mongoose
  .connect('mongodb://localhost:27017/covoiturage', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));





  app.use('/api', AuthRoute);







  app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error details
    res.status(500).send('Something went wrong!');
  });
  
  

  app.listen(5000, '0.0.0.0', () => {
    console.log('Server is running on http://0.0.0.0:5000');
  });