//npm i node
//npm i express
//npm i express body-parser
//npm i nodemon

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

let rawdata = fs.readFileSync('./hard.json');
let employees = JSON.parse(rawdata);

//creating instance for experess 

const app = express();

//creating port for server

const port = 3000;

//middleware to parse request as JSON

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/employees', (req, res)=>{
    res.render('employees', {employees: employees.employees})
})

app.get('/employees/all', (req, res)=>{
    res.render('employees', {employees: employees.employees})
})
app.get('/employees/:id', (req, res)=>{
    let found = false;
    employees.employees.forEach(element => {
        let id = parseInt(req.params.id) 
        if(element.employeeID === id && found === false){
            res.set('Cache-Control', 'no-store');
            res.status(200).render('hard', 
            {id: element.employeeID,
            name: element.name,
            salary: element.salary,
            department: element.department
            });
            found = true;
        }
        
    });

    if(!found){
        res.status(404);
        res.render('errors')
    }
        
   
})




app.get('/', (req, res)=>{
    res.status(200);
    res.render('home')
})



app.listen(port, ()=>{
    console.log(`listening at port: ${port}`);
})

app.locals.employees = employees;

