import React from 'react'
import {Alert} from '@material-ui/lab'
const Accepted = () => {
   return (
      <div>
         <Alert severity="success" color="info">
         Success, Your is data is received.
         <strong> We sent a mail for further process check it out!</strong>
         </Alert>
      </div>
   )
}

export default Accepted
