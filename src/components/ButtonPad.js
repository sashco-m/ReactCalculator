import React from 'react';
import Button from './Button';
import DelButton from './DelButton';
import './ButtonPad.css';
import './Button.css';

class Calculator extends React.Component{

  render(){
    return(
      <div className="padLayout">
        <Button class={"myButton"} handleClick={this.props.handleClick} name="7"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="8"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="9"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="/"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="4"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="5"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="6"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="*"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="1"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="2"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="3"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="-"/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="."/>
        <Button class={"myButton"} handleClick={this.props.handleClick} name="0"/>
        <DelButton class={"delButton"} 
        handleClick={this.props.handleDel} 
        handleDelPress={this.props.handleDelPress} 
        handleDelRelease={this.props.handleDelRelease}
         name="DEL"/>
        <Button class={"myButton"}
         handleClick={this.props.handleClick} name="+"/>
      </div>
    );
  }

}


export default Calculator;