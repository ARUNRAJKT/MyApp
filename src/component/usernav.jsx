import React from 'react';
import { AppBar, Toolbar ,Grid, InputBase,Button, IconButton, Badge } from '@mui/material';
import {NotificationsActiveTwoTone,ChatTwoTone,PowerSettingsNewTwoTone,SearchOutlined} from '@mui/icons-material/';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
import { Link, useNavigate } from 'react-router-dom';
import {useJwt} from 'react-jwt';
import Userfeed from './userfeed';

export default function Usernav() {
  const navigate=useNavigate()
  const token = localStorage.getItem("token");
  console.log(token)
  // const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
  const { decodedToken, isExpired } = useJwt(token);
  const userData = decodedToken;
  console.log(userData)
  // const user=userData.userId;
//  console.log(user)
  const deleteUser=()=>{
    alert("Confirm to sign out?")
    localStorage.removeItem("token")
    navigate("/login")
  }
   
  return (
    <React.Fragment>
    <AppBar position='sticky' style={{'background-color':'transparent',color:"white"}}>
<Toolbar>
    <Grid container>
        <Grid item xs={4}>
          <FastfoodTwoToneIcon/> &nbsp;&nbsp;DONATE TO
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}>
        <Link to="/login" style={{"textDecoration":"none"}}>
                  <Button style={{fontSize:"12px",color:"white"}} variant="text">LOGIN</Button>
                  </Link>
                  
                  {userData? <input type="text" style={{background:"transparent",borderStyle:"none",color:"green",fontSize:"19px",width:"100px"}} 
                  value={userData.username} />:""}
                  &nbsp;&nbsp;&nbsp;
                  <Button  style={{fontSize:"12px",color:"red"}} onClick={deleteUser}>Logout</Button>
              
        </Grid>
    </Grid>

</Toolbar> 
</AppBar>
</React.Fragment>
  )
}
