import React,{useEffect, useState} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import {useJwt} from 'react-jwt';
import "./style.css"
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Grid, Typography,Button,Modal,Box, TextField } from '@mui/material';


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Userfeed() {
  const navigate=useNavigate()
  const token=localStorage.getItem("token");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Addfood,setAddfood]=useState('')
  const [ShowUserfood,SetUserfood]=useState([])

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setAddfood({...Addfood,[name]:value})
  }


  console.log(token)
  const { decodedToken, isExpired } = useJwt(token);
  const usertkn = decodedToken;
  const user=usertkn.userId;
  console.log(user)

  const submitFood=(e)=>{
    e.preventDefault()
    console.log("hellloooo")
   
    const header ={
      'Content-Type':'application/json',
    }
    axios.post('http://localhost:5000/api/item/add-food',Addfood,header).then((response)=>{
      console.log("res",response)
      if (response.data.success==true) {
       
        handleClose()
        navigate('/')
      }else{
        alert('foodadded errrorr')
      }
    })
    .catch((error)=>{
      alert(error.response.data.message)
    })
  }
  useEffect(()=>{
    setAddfood({})
  },[])
  const [Addbook,setAddbook]=useState('')

  axios.get('http://localhost:5000/api/item/view-user-food')
  .then((response)=>{
    SetUserfood(response)
    console.log(response)
  })

  return (<React.Fragment>
    <div style={{width:"400px",
                 position:"absolute",
                 color:"white",
                 fontSize:"20px",
                 margin:"50px",
                 lineHeight:"35px",
                 wordSpacing:"10px",
                 letterSpacing:"2px"}}>
          &nbsp; More than 11000 villages have been affected by the flooding, forcing more than a
       million to seek shelter in relief camps. It is estimated that at least 10,00,000 
       people are in the need of immediate lifesaving support out of which 4,00,000 are 
       children. More than 11,000 schools are closed due to floods and most of the schools 
       that are accessible are functioning as relief camps.
</div>
      <img src='https://cdn-5e6c81e5f911c80ca0fdddf4.closte.com/wp-content/uploads/2018/07/3.png' style={{marginLeft:"490px",marginTop:"20px"}}/><br/>
      <Typography className='donatediv' style={{backgroundColor:"rgb(7, 23, 54)",fontFamily:"monospace",color:"white",margin:"30px",padding:"20px",height:"400px"}} variant='h3'>Take the step to BE A DONOR !<br /><br />
     {token?
       <Grid container style={{marginLeft:"35px"}} > 
       <Grid item xs={1}></Grid><br />
       <Grid item xs={2} >

         <img src="./assests/30322622.jpg" alt=""style={{ width:"350px"}}/>
         <Button style={{backgroundColor:"white",marginBottom:"20px1"}} onClick={handleOpen}>Donate Food</Button>
       </Grid>
       <Grid item xs={1}></Grid>
       <Grid item xs={2}>
        {/* style={{backgroundColor:"white"}}> */}
       <img src="./assests/33133662.jpg" alt=""style={{ width:"350px",marginLeft:"50px"}}/>
       <Button style={{backgroundColor:"white",marginBottom:"20px",marginLeft:"50px"}} onClick={handleOpen}>Donate Cloth</Button>
       </Grid>
       <Grid item xs={1}></Grid>
       <Grid item xs={2} >
       {/* style={{backgroundColor:"white"}}> */}
       <img src="./assests/charity-box.jpg" alt=""style={{ width:"350px",marginLeft:"96px"}}/>
       <Button style={{backgroundColor:"white",marginBottom:"25px",marginLeft:"100px",width:"200px"}} >Donate Other Things</Button>
       </Grid>
       <Grid item xs={1}></Grid>



{/* modal starts from here */}


<Modal open={open}
        onsubmit={handleClose}
        >
<Box sx={style}>
  <form onSubmit={submitFood}>
  <Typography id="modal-modal-title" variant="h6" component="h2">
    Donate
  </Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   Food Name
  </Typography>
  <TextField type="text" value={Addfood.food_name||""} name="food_name" onChange={handleChange}/>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   Category
  </Typography>
  <TextField type="text" value={Addfood.category||""} name="category" onChange={handleChange}/>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   Quantity
  </Typography>
  <TextField type="text" value={Addfood.quantity||""} name="quantity" onChange={handleChange}/>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   Date
  </Typography>
  <TextField type="text"  value={Addfood.date||""} name="date" onChange={handleChange}/><br />
  {/* <TextField type="hidden"  value={usertkn.userId||""} name="userId"/><br /> */}
  <Button type='submit'>submit</Button>
  </form>
</Box>
</Modal> 

{/* modal closes */}


     </Grid>


      :<div style={{backgroundColor:"white",height:"300px",color:"black",textAlign:"center"}}><br/><br /><span style={{left:"80px",position:"absolute",fontSize:"40px"}}>Please sign in to Donate.!</span>
        <img src="https://thumbs.dreamstime.com/b/donate-vector-sign-over-white-35246024.jpg" alt="" style={{width:"150px"}}/></div>
     }</Typography>
    
 
      <div style={{backgroundColor:"white",marginTop:"45px",marginLeft:"20px",width:"600px",padding:"20px",fontSize:"20px",fontWeight:"500"}}>Things Donated . . . . .</div>
    <ImageList sx={{color:"white", width: 1400,marginLeft: 8, height: 550 }} cols={6} gap={11}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
      {/* {user?ShowUserfood:"no datafound"} */}
    </ImageList>
    <div style={{backgroundColor:"rgb(2, 9, 54)",height:"40px",fontStyle:"oblique",color:"white",paddingBottom:"20px"}}>
      <center><br/>created by ArunRajKT</center>
    </div>
    </React.Fragment>
  )
}
