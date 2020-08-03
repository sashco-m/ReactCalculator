import React from 'react'
import './Hints.css'
import HintButton from './HintButton'

class HintSelect extends React.Component{

  render(){
    return(
        <div className="circleContainer">
          <HintButton handleHintClick={this.props.handleHintClick}id="1"/>
          <HintButton handleHintClick={this.props.handleHintClick} id="2"/>
        </div>
    )
  }

}

export default HintSelect;