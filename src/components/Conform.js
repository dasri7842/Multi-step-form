import React from 'react'
import {Button,Card} from '@material-ui/core'

const Conform = ({prevStep, nextStep, values}) => {
   var ListItem = []
   const style={
      display : 'grid',
      gridTemplateColumns: '1fr 1fr',
   }
   for(let p in values) if(p!=='step')ListItem.push(
      <div style={style}>
         <p>{p.toUpperCase()} :</p> 
         <p><b>{values[p]} </b></p>
      </div>
   );
   return (
      <div>
         <Card style={{padding:'2%'}}>
            <div style={{width:'60%',margin:'auto'}}>
               {ListItem}
            </div>
         </Card>
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
         Conform
         </Button>
      </div>
   )
}

export default Conform
