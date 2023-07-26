import React from 'react';
import { AppBar, Toolbar ,Grid, InputBase,Button, IconButton, Badge } from '@mui/material';
import {NotificationsActiveTwoTone,FastfoodTwoTone,ChatTwoTone,PowerSettingsNewTwoTone,SearchOutlined} from '@mui/icons-material/';
import { Link } from 'react-router-dom';

export default function adminnav() {
  return (
    <AppBar position='sticky' style={{'background-color':'transparent',color:"white"}}>
<Toolbar>
    <Grid container>
        <Grid item xs={4}>
          <FastfoodTwoTone/>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}>
        <Link to="/login" style={{"textDecoration":"none"}}>
                  <Button style={{fontSize:"12px",color:"white"}} variant="text">LOGIN</Button>
                  </Link>
        <Link to="/userdetails" style={{"textDecoration":"none"}}>
                  <Button style={{fontSize:"12px",color:"white"}} variant="text">USER DETAILS</Button>
                  </Link>
        </Grid>
    </Grid>

</Toolbar> 
</AppBar>
  )
}







