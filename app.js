const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000 ;

const app = express();

// Enable body parser 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Set static folder
app.use(express.static(path.join(__dirname,'View')));


app.use('/openai' , require('./routes/openAI'))
app.listen(port , () => console.log(`listening on port ${port}`));