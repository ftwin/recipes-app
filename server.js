const express = require('express');
const bodyParser = require('body-parser');
const recipeRoutes = require('./api/routes/recipeRoutes');

//instantiate an empty express app
const app = express();
// adds middleware to parse the BODY of the request. Converts information into json so that we can use it. Creates req.body and puts it there
app.use(bodyParser.json());




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