import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';


function Home() {
    const [Emp_name, setEmp_name] = useState('')
    const [DOB, setDOB] = useState('')
    const [Age, setAge] = useState('')
    const [Department, setDepartment] = useState('')
    const [Designation, setDesignation] = useState('')
    const [Salary, setSalary] = useState('')
    const [Address, setAddress] = useState('')
    const [Phone_No, setPhone_No] = useState('')
    const navigate=useNavigate();
    const handleSubmit = (event) =>{
        console.log(Emp_name,DOB,Age,Department,Designation,Salary,Address,Phone_No);
        event.preventDefault();
        axios.post('http://localhost:3001/',{Emp_name,DOB,Age,Department,Designation,Salary,Address,Phone_No})
        .then(res =>{
            navigate('/');
        }).catch(err => console.log(err));
    }
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));   
    })
    const handleDelete=(Emp_name)=>{
        axios.delete('http://localhost:3001/'+Emp_name)
        .then(res => navigate('/'))
        .catch(err => console.log(err));
    }
  return (
    <div>
        <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <h1>Employee Registration Details</h1>
                        <div className='inputs'>
                            <div className='name'>Emp_name</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Employee Name:' onChange={e => setEmp_name(e.target.value)}required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>DOB</div>
                            <div classname='inputs'>
                                <input type='date' placeholder='Enter DOB:' onChange={e => setDOB(e.target.value)}required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Age</div>
                            <div classname='inputs'>
                                <input type='number' placeholder='Enter Age:' onChange={e => setAge(e.target.value)}required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Department</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Department:' onChange={e => setDepartment(e.target.value)}required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Designation</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Designation :' onChange={e => setDesignation(e.target.value)}required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Salary</div>
                            <div classname='inputs'>
                                <input type='number' placeholder='Enter Salary:' onChange={e => setSalary(e.target.value)}required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Address</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Address:' onChange={e => setAddress(e.target.value)}required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Phone_No</div>
                            <div classname='inputs'>
                                <input type='number' placeholder='Enter Phone No:' onChange={e => setPhone_No(e.target.value)}required/>
                            </div>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
        <div className='container'>
            <div className='main'>
                <h1> Employee Details</h1>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>Emp_name</th>
                            <div></div>
                            <th>DOB</th>
                            <div></div>
                            <th>Age</th>
                            <div></div>
                            <th>Department</th>
                            <div></div>
                            <th>Designation</th>
                            <div></div>
                            <th>Salary</th>
                            <div></div>
                            <th>Address</th>
                            <div></div>
                            <th>Phone_No</th>
                            <div></div>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (d ,i) => (
                            <tr>
                                <td>{d.Emp_name}</td>
                                <div></div>
                                <td>{d.DOB}</td>
                                <div></div>
                                <td>{d.Age}</td>
                                <div></div>
                                <td>{d.Department}</td>
                                <div></div>
                                <td>{d.Designation}</td>
                                <div></div>
                                <td>{d.Salary}</td>
                                <div></div>
                                <td>{d.Address}</td>
                                <div></div>
                                <td>{d.Phone_No}</td>
                                <div></div>
                                <td>
                                    <button onClick={e=>handleDelete(d.Emp_name)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
}
export default Home