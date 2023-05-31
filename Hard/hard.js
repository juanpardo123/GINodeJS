//npm i node
//npm i express
//npm i express body-parser
//npm i nodemon

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

let rawdata = fs.readFileSync('./hard.json');
let employees = JSON.parse(rawdata);

console.log(typeof employees);
//creating instance for experess 

const app = express();

//creating port for server

const port = 3000;

//middleware to parse request as JSON

app.use(bodyParser.json());

app.set('view engine', 'ejs');


app.get('/:id', (req, res)=>{

    employees.employees.forEach(element => {
        let id = parseInt(req.params.id) 
        if(element.employeeID == id){
            
            res.render('hard', 
            {id: element.employeeID,
            name: element.name,
            salary: element.salary,
            department: element.department
            })
        }
        
    });

        res.render('errors')
   
})

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/employees', (req, res)=>{
    res.render('employees')
})

app.listen(port, ()=>{
    console.log(`listening at port: ${port}`);
})

app.locals.employees = employees;