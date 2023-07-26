import { Button, Grid, Typography } from '@mui/material'
import { width } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Cards() {
    const [details,setDetails]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/user-details').then((response)=>{
            const data=response.data.details;
            if(response.data.success==true){
                setDetails(data)
            }
            console.log(data)
        })
    },[])
    console.log(details)
  return (
    <div className='card'>
        <Grid container >
            {details.map((index)=>(
            <Grid item xs= {3} style={{backgroundColor:"rgb(7, 23, 54)",width:"100%",marginLeft:"60px",margin:"20px"}}>
              <div className='details' >
                  
                  <Typography>
                        Username:{index.username}
                  </Typography>
                  <Typography style={{width:"200px",color:"red"}}>
                        Password:{index.password}
                  </Typography>
                  <Typography>
                        Id:{index._id}
                  </Typography>
                      
                  <Button>Delete</Button>
              </div>
            </Grid>
            ))}
        </Grid>
    </div>
  )
}
