//npm i node
//npm i express
//npm i express body-parser
//npm i nodemon


const express = require('express');
const bodyParser = require('body-parser');

//creating instance for experess 

const app = express();

//creating port for server

const port = 3000;

//middleware to parse request as JSON

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('', (req, res)=>{
    res.render('hard')
})

app.listen(port, ()=>{
    console.log(`listening at port: ${port}`);
})

