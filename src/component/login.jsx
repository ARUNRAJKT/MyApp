import React, { useEffect, useState } from 'react';
import { Paper,Button,TextField,Checkbox,FormControlLabel,Typography  } from '@mui/material';
import { makeStyles } from '@mui/styles'
import Register from './register'
import axios from 'axios';
import { useJwt } from "react-jwt";
import { Link,useNavigate  } from 'react-router-dom';

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
    const css=usecss()
    const navigate=useNavigate()
    const [log,setLog]=useState('');
    const Localstorage="token"
    const logChange=(e)=>{
        const{name,value}=e.target;
        setLog({...log,[name]:value})
    }
    const loginSubmit=(e)=>{
        e.preventDefault()
        const header={
            'Content-Type':'application/json'
        }

        console.log(log)
        axios.post("http://localhost:5000/api/login/logindata",log,header).then((response)=>
        {
            console.log(response)
            if(response.data.userRole==0){
            if(response.data.success==true){
                alert("WELCOME ARUNRAJ !! Please confirm to signIN")       
            }
            navigate("/admin")
        }
        else{
            if(response.data.success==true){
             const token=response.data.token;
             const Local_Storage=localStorage.setItem(Localstorage,token)
             
            }
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
"box-shadow":" 0px 9px 9px 4px rgba(0,0,0,0.75)"
}}>
          <Paper>
          <div style={{backgroundImage:"black",height:"300px"}}>
              <img style={{"height":"300px","width":"430px"}} src="./assests/img3.jpg" alt="" />
              <div style={{marginTop:"-40px",marginLeft:"-190px"}}>
              <Link to="/reg" style={{"textDecoration":"none"}}>
                  <Button style={{fontSize:"12px"}} variant="text">Create Account</Button>
                  </Link>
                  <Link to="/" style={{"textDecoration":"none"}}>
                  <Button style={{fontSize:"12px",color:"green"}} variant="text">Home</Button>
                  </Link>
              </div>
          </div>
          </Paper>   
          <Paper>
              <div className={css.root}>
                  <h3>USER LOGIN</h3>
                  <form onSubmit={loginSubmit}>
                  <TextField id="outlined-basic" label="Username" variant="outlined" onChange={logChange} value={log.username||""} name="username"/><br />
                  <TextField id="outlined-basic" label="Password" variant="outlined" onChange={logChange} value={log.password||""} name="password"/><br />
                  <FormControlLabel  name="permanent" control={<Checkbox  />} style={{marginLeft:"-210px"}} label="Remember me" />
                 <Typography style={{marginTop:"-32px",marginLeft:"230px"}}>Forgot password?</Typography> <br />
                  <Button type='Submit' variant="contained" color="success" style={{marginBottom:"20px"}}>
                     Success
                  </Button>
                  </form>
              </div>
          </Paper>
      </Paper>
      
      </center>
  )
}
