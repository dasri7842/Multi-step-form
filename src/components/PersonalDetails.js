import React from 'react'
import {Button,TextField} from '@material-ui/core'

const PersonalDetails = ({nextStep, handleChange, values}) => {
   return (
      <div>
         <TextField 
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
            placeholder="Enter your First Name"
            fullWidth
            margin="dense"
         />
         <TextField 
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
            placeholder="Enter your Last Name"
            fullWidth
            margin="dense"
         />
         <TextField 
            label="Email"
            name="email"
            onChange={handleChange}
            value={values.email} 
            placeholder="Enter your Email"
            fullWidth
            helperText="abcd@email.com"
            margin="dense"
         />
         <br/>
         <br/>
         <Button 
            onClick={nextStep}
            color="primary"
            variant="contained"
            style={{margin: "5px", float:"right"}}
         >
         Continue
         </Button>
      </div>
   )
}

export default PersonalDetails
