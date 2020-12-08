const express = require('express');
// const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');
// const mongoose = require('mongoose');

const app = express();

app.use('/recipes', recipeRoutes);

app.listen(4000, () => {
	console.log(`server is running on port 4000`);
})


