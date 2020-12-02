import React, { Component } from 'react'
import AddressDetails from './AddressDetails'
import Conform from './Conform'
import PersonalDetails from './PersonalDetails'
import Accepted from './Accepted'
import TitleHeader from './TitleHeader'   
import ProgressBar from './ProgressBar'   

class UserForm extends Component {
   state = {
      step : 1,
      firstName : '',
      lastName : '',
      email : '',
      city : '',
      bio : '',
      occupation : ''
   }
   nextStep=()=>{
      const {step} = this.state;
      this.setState({
         step : step + 1
      })
   }
   prevStep=()=>{
      const {step} = this.state;
      this.setState({
         step : step - 1
      })
   }
   handleChange = (e) =>{
      this.setState({
         [e.target.name] : e.target.value
      })
      // console.log(this.state)
   }
   render() {
      switch(this.state.step){
         case 1 : return (
            <div>
               <TitleHeader Title="Personal Details"/>
               <ProgressBar step={this.state.step}/>
               <PersonalDetails 
               nextStep={this.nextStep}
               handleChange={this.handleChange}
               values={this.state}
               />

            </div>
         )
         case 2 : return (
            
            <div>
               <TitleHeader Title="Address Details"/>
               <ProgressBar step={this.state.step}/>
               <AddressDetails
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               handleChange={this.handleChange}
               values={this.state}
               />
            </div>
         )
         case 3 : return(
            <div>
               <TitleHeader Title="Conform Your details"/>
               <ProgressBar step={this.state.step}/>
               <Conform
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               values={this.state}  
              />
            </div>
            
         )
         default : return(
            <Accepted/>
         )
      }
   }
}

export default UserForm
