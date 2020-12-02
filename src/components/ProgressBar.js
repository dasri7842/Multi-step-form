import {LinearProgress} from '@material-ui/core'
import React from 'react'

const ProgressBar = ({step}) => {
   const style={
      height:'8px',
      margin:'auto',
      marginBottom:'30px',
      borderBottomLeftRadius:'20px',
      borderBottomRightRadius:'20px'
   }
   return (
      <div>
         <LinearProgress variant="buffer" style={style} value={step*33.333} />
      </div>
   )
}

export default ProgressBar
