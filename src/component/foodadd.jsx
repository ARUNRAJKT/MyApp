import React from 'react';
import { TextField,FormControlLabel,Button,Typography } from '@mui/material';

export default function foodadd() {
  return (
    <Paper>
              <div className={css.root}>
                  <h3>USER LOGIN</h3>
                  <form onSubmit={loginSubmit}>
                  <TextField id="outlined-basic" label="Username" variant="outlined" onChange={logChange} value={log.username||""} name="username"/><br />
                  <TextField id="outlined-basic" label="Username" variant="outlined" onChange={logChange} value={log.username||""} name="username"/><br />
                  <TextField id="outlined-basic" label="Username" variant="outlined" onChange={logChange} value={log.username||""} name="username"/><br />
                  <TextField id="outlined-basic" label="Password" variant="outlined" onChange={logChange} value={log.password||""} name="password"/><br />
                  <FormControlLabel  name="permanent" control={<Checkbox  />} style={{marginLeft:"-210px"}} label="Remember me" />
                 <Typography style={{marginTop:"-32px",marginLeft:"230px"}}>Forgot password?</Typography> <br />
                  <Button type='Submit' variant="contained" color="success" style={{marginBottom:"20px"}}>
                     Success
                  </Button>
                  </form>
              </div>
          </Paper>
  )
}
