const express = require('express');
// const bodyParser = require('body-parser');
const recipeRoutes = require('./api/routes/recipeRoutes');
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/recipes';
//instantiate an empty express app
const app = express();

// Connect to database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to: ${uri} `);
  })
  .catch( err => {
    console.log(err.message);
  })

// adds middleware to parse the BODY of the request. Converts information into json so that we can use it. Creates req.body and puts it there
// app.use(bodyParser.json());
app.use(express.json({ extended: false }));



// app.get('*', (req, res) => {
//     console.log(`are we making this request?`);
// })
app.use('/recipes', recipeRoutes);



//concurrently: will allow you to run you front end and back end together
// 1000 -> min port number, because ports are more often assigned under that number for things like FTP, etc.
// 65535 -> max port number

app.listen(4000, ()=> {
    console.log(`server running on port 4000`);
})