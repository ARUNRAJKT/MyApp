import { Card } from '@mui/material'
import React from 'react'

export default function props(props) {
    console.log(props.colorData)
  return (
    <center><br />
    <Card style={{width:"200px",backgroundColor:props.colorData? "#258BD6" : "#CB69C1"}}>{props.wordData}</Card>
    </center>
  )
}
