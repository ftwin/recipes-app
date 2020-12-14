const express = require('express');
// const bodyParser = require('body-parser');
const recipeRoutes = require('./api/routes/recipeRoutes');
const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/recipes';
//instantiate an empty express app
const app = express();

// If DB_URI exists, use it OR if it doesn't use this path
const uri = process.env.DB_URI || 'mongodb://localhost:27017/recipes';
const PORT = process.env.PORT || "4000";

//heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./build'));
  // only add this part if you are using React Router
  app.get('*', (req,res) =>{
      console.log(path.join(__dirname+'/build/index.html'));
      res.sendFile(path.join(__dirname+'/build/index.html'));
  });
}


// Connect to database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log(`Successfully connected to: ${uri} `);
    app.listen(PORT, ()=> {
      console.log(`server running on port 4000`);
  })
  })
  .catch( err => {
    console.log(err.message);
  })

// adds middleware to parse the BODY of the request. Converts information into json so that we can use it. Creates req.body and puts it there
// app.use(bodyParser.json());
app.use(express.json({ extended: false }));
app.use('/recipes', recipeRoutes);


// app.get('*', (req, res) => {
//     console.log(`are we making this request?`);
// })



//concurrently: will allow you to run you front end and back end together
// 1000 -> min port number, because ports are more often assigned under that number for things like FTP, etc.
// 65535 -> max port number

