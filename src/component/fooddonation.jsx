import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Grid,Typography,Modal,Box,Button,TextField} from '@mui/material'
import {DeleteOutline,SystemUpdateAlt,ModeEdit} from '@mui/icons-material/';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'cornflowerblue',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Fooddonation() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [food,setFood]=useState([])
    const [fooddata,setfooddata]=useState()
    useEffect(()=>{
        axios.get('http://localhost:5000/api/item/view-food').then((response)=>{
            const allfood=response.data.data
            console.table(allfood)
            // if (response.data.success==true) {
                setFood(allfood)
                
            // }
            console.table(allfood)
        })
    },[])
    console.log(food)

    // ==Edit==section==

    // const Approve=(id)=>{
    //     console.log(id)
    //     handleOpen()
    //     axios.get(`http://localhost:5000/api/item/edit/${id}`).then((response)=>{
    //         console.log(response)
    //         setfooddata(response.data.message)
            
    //     })
    // }

    // const edit=(e)=>{
    //   const {name,value}=e.target
    //   setfooddata({...fooddata,[name]:value})
    // }
    
    // // ==Updat==book==
    // const update=(id)=>{
    //   axios.post('http://localhost:5000/api/item/update-food').then((response)=>{
    //     console.log(response)
    //   })
    // }
  return (
    <div className="card">
    <Grid container>
        {/* ===[mapping-section]=== */}
            {food.map((index)=>(   

            <Grid item xs={2}>      
                <div className="books" style={{padding:"10%",lineHeight:"10px"}}> 
                    <Typography className='type' variant='h5'>
                       Name : {index.food_name}
                    </Typography>
                    <Typography className='type' variant='h5'><br />
                       Category : {index.food_category}
                    </Typography><br /><br /><br /><br /><br /><br />
                    <Button  variant='contained'><ModeEdit/></Button>
                    <Button variant='contained' style={{float:"right",backgroundColor:"black"}}><DeleteOutline/></Button>
                </div>
                {/* <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
         <TextField variant='filled' label="Category" style={{width:"100%"}} name='category' value={fooddata.category || ""} ></TextField>
         <TextField variant='filled' label="Language" style={{width:"100%",marginTop:"17px"}} name='language' value={fooddata.language || ""}  ></TextField>
         <Button  variant='contained' style={{color:"white",backgroundColor:"black",float:"right",marginTop:"20px",position:"absolute",bottom:"0px",right:"10px"}}><SystemUpdateAlt/>Update</Button>
        </Box>
      </Modal> */}
            </Grid>
           ))} 
        </Grid>
        {/* [[[==Modal==]]] */}
     
    </div>
  )
}

