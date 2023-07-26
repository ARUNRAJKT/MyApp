import { Button, Grid, Typography } from '@mui/material'
import { width } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function Bookdonation() {
    const [detailsCloth,setCloth]=useState([])
    const Localstorage="books"
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:5000/api/book/view-book').then((response)=>{
            const data=response.data.data;
            if(response.data.success==true){
                setCloth(data)
            }
            console.log(data)
        })
    },[])
    console.log(detailsCloth)

    const deletebook=(id)=>{
        axios.get(`http://localhost:5000/api/book/delete-book/${id}`)
        .then((response)=>{
            console.log(response);
            alert(response.data.message)
            navigate("/adddonationthree")
        })
    }


    const editbook=(id)=>{
        const ide=id;
        console.log(ide)
            // const Local_Storage=localStorage.setItem(Localstorage,books)
            navigate(`/bookupdate/${ide}`);
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
                        Category:{index.category} 
                  </Typography>
                  <Typography>
                         Language:{index.language}
                  </Typography>                  
                  <Button style={{backgroundColor:"rgb(142, 16, 16)",color:"white"}} onClick={()=>deletebook(index._id)}>Delete</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button style={{backgroundColor:"rgb(16, 91, 2)",color:"white"}} onClick={()=>editbook(index._id)}>Update</Button>
              </div>
            </Grid>
        ))}
        </Grid>
    </div>
  )
}