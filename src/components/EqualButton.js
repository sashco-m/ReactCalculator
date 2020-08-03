import React from 'react';
import './EqualButton.css'

class EqualButton extends React.Component{

  render(){
    return(
      <div className="equalButton" onClick={()=>this.props.handleSolve()}>
        <p>Solve</p>
      </div>
    );
  }

}

export default EqualButton