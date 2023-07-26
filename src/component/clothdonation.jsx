import { Button, Grid, Typography } from '@mui/material'
import { width } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function Cards() {
    const [detailsCloth,setCloth]=useState([])
    const navigate=useNavigate()
    const Localstorage="cloth"
    useEffect(()=>{
        axios.get('http://localhost:5000/api/cloth/view-cloth').then((response)=>{
            const data=response.data.data;
            if(response.data.success==true){
                setCloth(data)
            }
            console.log(data)
        })
    },[])
    console.log(detailsCloth)



    const editcloth=(id)=>{
        const ide=id;
        console.log(ide)
        axios.get(`http://localhost:5000/api/cloth/edit/${id}`)
        .then((response)=>{
            const cloth=JSON.stringify(response.data.message);
            console.log(cloth)
            const Local_Storage=localStorage.setItem(Localstorage,cloth)
            navigate("/clothupdate")
        })
    }
  return (
    <div className='card'>
        <Grid container style={{margin:"20px"}}>
        {detailsCloth.map((index)=>(
            <Grid item xs= {3} style={{backgroundColor:"rgb(7, 23, 54)",width:"100%",margin:"40px"}}>
              <div className='details' >
                  
                  <Typography>
                        UserId:{index._id}
                  </Typography>
                  <Typography >
                        Gender:{index.gender} 
                  </Typography>
                  <Typography>
                         Type:{index.type}
                  </Typography>
                  <Typography>
                         Quantity:{index.quantity} 
                  </Typography>
                      
                  <Button>Delete</Button>
                  <Button style={{backgroundColor:"rgb(16, 91, 2)",color:"white"}} onClick={()=>editcloth(index._id)}>Update</Button>
                  
              </div>
            </Grid>
        ))}
        </Grid>
    </div>
  )
}
