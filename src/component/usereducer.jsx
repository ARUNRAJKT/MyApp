import React from 'react'
import { Paper,Button,TextField } from '@mui/material';
import { useReducer } from 'react';
import Props from './props';


const ACTION={
    INCREMENT:"increment",
    DECREMENT:"decrement",
    ENTER:"enter",
    COLOR:"tgcolor"
}

const reducer=(state,action)=>{
    switch(action.type){
        case ACTION.INCREMENT:
            return{...state,count:state.count+1}
        case ACTION.DECREMENT:
            return {...state,count:state.count-1}
    case ACTION.ENTER:
      return {...state,input: action.payload}
    case ACTION.COLOR:
      return {...state, color: !state.color}
    default:
      throw new Error();
    }
}
export default function Usereducer() {
    const [state,dispatch]=useReducer(reducer,{count: 0,input:"",color:false})
  return (<React.Fragment>
    <Paper id='pap'><center>
      <h2 className='header' style={{ color:state.color? "#258BD6" : "#CB69C1"}}>TRIAL APP</h2> 
       <TextField className='text' value={state.input} onChange={(e)=>dispatch({type:ACTION.ENTER,payload:e.target.value})} ></TextField><br />
       <div className='div'></div>
       <h4 className='num' style={{ color:state.color? "#258BD6" : "#CB69C1"}} >{state.count}</h4>
       <div className='div'></div>
       <Button variant='contained' onClick={(()=>dispatch({type:ACTION.INCREMENT}))} color='success'>+</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Button variant='contained' onClick={(()=>dispatch({type:ACTION.DECREMENT}))} color='error'>-</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Button variant='contained' onClick={(()=>dispatch({type:ACTION.COLOR}))} color='secondary'>Color</Button><br />
       <div className='content'style={{ color:state.color? "#258BD6" : "#CB69C1"}} >
           {state.input}
       </div>
       <div className='div'></div>
       </center>
    </Paper>
    <Props wordData={state.input} colorData={state.color}/>
    </React.Fragment>
  )
}
