const express = require('express');
const Router  = express.Router();
const {GenerateImage} = require('../controllers/openAI')
Router.post('/GenerateImage',GenerateImage) ; 
//localhost:5000/openai/GenerateImage
module.exports = Router ;