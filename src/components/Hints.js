import React from 'react'
import './Hints.css'
import HintSelect from './HintSelect'

class Hints extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentHint: "Hold Down DEL key to clear all!",
      };

      this.handleHintClick=this.handleHintClick.bind(this)
  }

  handleHintClick(id){
    if(id==1){
      this.setState((state)=>({
        currentHint: "Hold Down DEL key to clear all!"
      }))
    }
    else{
      this.setState((state)=>({
        currentHint: "Hold down the result to copy to clipboard!"
      }))
    }
  }

  render(){
    return(
      <div className="hintBox">
        <p className="title">Hints</p>
        <p>{this.state.currentHint}</p>
        <HintSelect handleHintClick={this.handleHintClick}/>
      </div>
    )
  }

}

export default Hints;