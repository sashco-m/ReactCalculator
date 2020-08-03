import React from 'react'
import './Hints.css'

class HintButton extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id:this.props.id,
    }
  }
  render(){
    return(
      <div 
        onClick={()=>this.props.handleHintClick(this.state.id)} className="circle">{this.state.id}
      </div>
    )
  }
}


export default HintButton;
