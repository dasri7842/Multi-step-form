import React from 'react'
import {Button,TextField} from '@material-ui/core'
const AddressDetails = ({prevStep, nextStep, handleChange, values}) => {
   return (
      <div>
         <TextField
            label="City"
            name="city"
            placeholder="Enter Your City Name"
            fullWidth
            onChange={handleChange}
            value={values.city}
            margin="dense"
         />
         <TextField
            label="Bio"
            name="bio"
            placeholder="Enter Your b\Bio"
            fullWidth
            onChange={handleChange}
            value={values.bio}
            margin="dense"
         />
         <TextField
            label="Occupation"
            name="occupation"
            placeholder="Enter Your occupation"
            helperText="Eg: Web developer"
            fullWidth
            onChange={handleChange}
            value={values.occupation}
            margin="dense"
         />
         <br/>
         <br/>
         <Button
            onClick={prevStep}
            variant="contained"
            color="white"
            style={{margin: "5px"}}
         >
            Back
         </Button>
         <Button
            onClick={nextStep}
            variant="contained"
            color="primary"
            style={{margin: "5px", float:"right"}}
         >
            Continue
         </Button>
      </div>
   )
}

export default AddressDetails
