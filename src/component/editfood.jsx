import React, { useState } from 'react';
import { TextField,FormControlLabel,Button,Typography,Paper } from '@mui/material';
import "./style.css"

export default function Editbook() {
    const bookedit=localStorage.getItem("books")
    console.log(bookedit.language)
    
  return (
    <Paper className='update'>
              <div className="updatediv">
                  <h3>BOOK UPDATE</h3>
                  <form >
                  <TextField id="outlined-basic" label="Book Category" value={bookedit.language} variant="outlined"  name="username"/><br /><Typography style={{height:"20px"}}></Typography>
                  <TextField id="outlined-basic" label="Language" variant="outlined"  name="username"/><br /><Typography style={{height:"20px"}}></Typography>
                  <TextField id="outlined-basic" label="Book id" variant="outlined"  name="username"/><br /><Typography style={{height:"20px"}}></Typography>
                  <Button type='Submit' variant="contained" color="success" style={{marginBottom:"20px"}}>
                     Update 
                  </Button>
                  </form>
              </div>
    </Paper>
  )
}