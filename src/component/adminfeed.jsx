import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Grid } from '@mui/material';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import "./style.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';


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

export default function adminfeed() {
  return (
    <React.Fragment>
    <Grid container>
     <Grid item xs={1}>

      </Grid>
      <Grid item xs={2} className="grid">
         <Link to="/userdetails" variant='button' style={{textDecoration:"none",textAlign:"center"}}><BadgeRoundedIcon className='icon' style={{fontSize:"120px"}}/><br />
         User Details
         </Link>
      </Grid>
      <Grid item xs={1}>

      </Grid>
      <Grid item xs={2} className="grid">
      <Link to="/adddonation" variant='button' style={{textDecoration:"none",textAlign:"center"}}><FastfoodIcon className='icon' style={{fontSize:"120px"}}/><br />
         Food Donated
         </Link>
      </Grid>
      <Grid item xs={1}>

      </Grid>
      <Grid item xs={2} className="grid">
      <Link to="/adddonationtwo" variant='button' style={{textDecoration:"none",textAlign:"center"}}><DryCleaningIcon className='icon' style={{fontSize:"120px"}}/><br />
         Cloth Donated
         </Link>
      </Grid>
      <Grid item xs={1}>

      </Grid>
      <Grid item xs={2} className="grid"> 
      <Link to="/adddonationthree" variant='button' style={{textDecoration:"none",textAlign:"center"}}><MenuBookIcon className='icon' style={{fontSize:"120px"}}/><br />
         Book Donated
         </Link>
      </Grid>


    </Grid>
 
      <div style={{backgroundColor:"white",marginTop:"25px",marginLeft:"20px",width:"600px",padding:"20px",fontSize:"20px",fontWeight:"500"}}>Things Donated . . . . .</div>
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
    </ImageList>
    <div style={{backgroundColor:"rgb(2, 9, 54)",height:"40px",fontStyle:"oblique",color:"white",paddingBottom:"20px"}}><center><br/>created by ArunRajKT</center></div>
    </React.Fragment>
  )
}
