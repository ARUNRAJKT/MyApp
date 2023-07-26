import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Color() {
    const [number,setNumber]=useState(0)
    const [words,setWord]=useState()
    const [btnColor, setBtnColor] = useState("red");
    const increment=(e)=>{
        const num1=number+1;
        setNumber(num1)
        console.log(num1)
    }
    const decerement=(e)=>{
        const num2=number-1;
        setNumber(num2)
        console.log(num2)
    }
    console.log(number)
    console.log(words)
  return (
    <Paper id='pap'><center>
      <h2 className='header'>TRIAL APP</h2> 
       <TextField className='text' value={words} onChange={(e)=>setWord(e.target.value)} name="word"></TextField><br />
       <div className='div'></div>
       <h4 className='num'style={{ color: btnColor }} >{number}</h4>
       <div className='div'></div>
       <Button variant='contained' onClick={increment} color='success'>+</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Button variant='contained' onClick={decerement} color='error'>-</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Button variant='contained' color='secondary'
        onClick={() => {
            btnColor === "red" ? setBtnColor("green") : setBtnColor("red");
          }}>Color</Button><br />
       <div className='content' style={{ color: btnColor }}>
            {words}
       </div>
       <div className='div'></div>
       </center>
    </Paper>
  )
}
