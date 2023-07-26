import React, { useState } from 'react';
import { TextField,FormControlLabel,Button,Typography,Paper, Hidden } from '@mui/material';
import "./style.css"
import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Editbook() {  
     const[bk,setBk]=useState({})
     const navigate=useNavigate()
     const {id}=useParams()
     console.log(id)
     useEffect(()=>{   
      axios.get(`http://localhost:5000/api/book/edit/${id}`)
      .then(
        (response)=>{
        console.log(response)
          const books=response.data.message;
          setBk(books)
          console.log(books)
      }
      )
    },[])


    const update=(e)=>{
      e.preventDefault();
      console.log(JSON.stringify(bk))
      const header={
        'Content-Type':'application/json',
      }
      axios.post('http://localhost:5000/api/book/update-book',bk,id,header)
      .then((response)=>{
        if(response.data.success==true){
          alert(response.data.message);
          navigate('/adddonationthree')
        }
        else{
          alert("Update Failed<>")
        }
      })
      .catch((error)=>{
        console.log(error)
        alert(error.response.data.message)
      })

    }
   const changing=(e)=>{
    const{name,value}=e.target
    setBk({...bk,[name]:value})  }
  return (
    <Paper className='update'>
              <div className="updatediv">
                  <h3>BOOK UPDATE</h3>
                  <form onSubmit={update}>
                  <TextField  label="Book Category"  InputLabelProps={{shrink: true,}} value={bk.category||""}   name="category" onChange={changing}/>
                  <br /><Typography style={{height:"20px"}}></Typography>
                  <TextField id="outlined-basic"  InputLabelProps={{shrink: true,}}  value={bk.language||""} label="Language" onChange={changing} variant="outlined" name="language"/>
                  <br /><Typography style={{height:"20px"}}></Typography>
                  <TextField id="outlined-basic"  InputLabelProps={{shrink: true,}}  value={bk._id||""} label="Book id" variant="outlined"  name="id"/>
                  <br /><Typography style={{height:"20px"}}></Typography> 
                  <Button type='Submit' variant="contained" color="success" style={{marginBottom:"20px"}}>
                     Update 
                  </Button>
                </form>
              </div>
    </Paper>
  )
}