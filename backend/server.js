const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"bhyyztywawdeuimqmef0-mysql.services.clever-cloud.com",
    user:"uzfhn2uheh5kvn7v",
    password:"dyYMJVmTDl7EcmnMc1QF",
    database:"bhyyztywawdeuimqmef0"
})

app.get('/',(req,res)=>{
    const sql="SELECT * FROM emp";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post('/', (req, res, next) => {
    const sql = "INSERT INTO emp (Emp_name, DOB, Age, Department, Designation, Salary, Address, Phone_No) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.Emp_name,
        req.body.DOB,
        req.body.Age,
        req.body.Department,
        req.body.Designation,
        req.body.Salary,
        req.body.Address,
        req.body.Phone_No,
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("created");
    });
});

  
app.delete('/:Emp_name', (req, res, next) => {
    const sql = "DELETE FROM emp WHERE Emp_name= ?";
    const Emp_name =req.params.Emp_name;

    db.query(sql, [Emp_name], (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("deleted");
    });
});



app.listen(3001, ()=>{
    console.log("Running the server");
})