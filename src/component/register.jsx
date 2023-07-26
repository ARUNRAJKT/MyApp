import React, { useState } from 'react';
import { Paper,Button,TextField,Checkbox,FormControlLabel,Typography  } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link,useNavigate } from 'react-router-dom';
import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';


const usecss=makeStyles({
    divCss:{
       width:"430px",
       height:"580px",
        marginTop:"4%",
    },
        root:{
            '& .MuiFormControl-root':{
                width:"360px",
                marginTop:"5px",
                borderRadius:"20px",
                margin:"15px",
               
            }
        }

})

export default function Login() {
    const navigate=useNavigate()
    const [reg,setReg]=useState('');
    const css=usecss()
    
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setReg(values=>({...values,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const header={
            'Content-Type':'application/json'
        }

        console.log(reg)
        axios.post("http://localhost:5000/api/register",reg,header).then((response)=>
        {
            console.log(response)
            if(response.data.success==true){
                alert(response.data.message)
                navigate("/")
            }
        })
        .catch((error)=>{
            console.log(error);
            alert(error.response.data.message)
        });
        
    }
     

  return (<center>
      <Paper shadows elevation={0} square className={css.divCss} style={{" -webkit-box-shadow":" 0px 9px 9px 4px rgba(0,0,0,0.75)",
                                                                         "-moz-box-shadow":"  0px 9px 9px 4px rgba(0,0,0,0.75)",
                                                                         "box-shadow":" 0px 9px 9px 4px rgba(0,0,0,0.75)"}}>
          <Paper>
          <div style={{backgroundImage:"black",height:"200px"}}>
              <img style={{"height":"150px","width":"430px"}} src="./assests/img5.jpg" alt="" />
              <div style={{marginTop:"-40px",marginLeft:"-260px"}}>
              <Link to="/" style={{"textDecoration":"none"}}>
                  <Button style={{fontSize:"12px"}} variant="text">Login</Button>
                  </Link>
                  <Link to="/user" style={{"textDecoration":"none"}}>
                  <Button style={{fontSize:"12px",color:"green"}} variant="text">Home</Button>
                  </Link>
              </div>
          </div>
          </Paper>   
          <Paper>
              <div style={{
                  marginTop:"-60px"
              }} className={css.root}>
                  <h3>REGISTER</h3>
                  <form onSubmit={handleSubmit}>
                  <TextField id="outlined-basic" onChange={handleChange} value={reg.name||""} name="name" label="name" variant="outlined" />
                  <TextField id="outlined-basic" onChange={handleChange} value={reg.phone||""} name="phone" label="phone" variant="outlined" type={"number"}/>
                  <TextField id="outlined-basic" onChange={handleChange} value={reg.address||""} name="address" label="address" variant="outlined" />
                  <TextField id="outlined-basic" onChange={handleChange} value={reg.username||""} name="username" label="username" variant="outlined" />
                  <TextField id="outlined-basic" onChange={handleChange} value={reg.password||""}  name="password" label="password" variant="outlined" type="password"/>
                  <Button type='Submit' variant="contained" color="secondary" style={{marginBottom:"20px"}}>
                     Register
                  </Button>
                  </form>
              </div>
          </Paper>
      </Paper>
      
      </center>
  )
}