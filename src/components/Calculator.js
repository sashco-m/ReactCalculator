import React from 'react';
import EqualButton from './EqualButton';
import ButtonPad from './ButtonPad';
import './Result.css';

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state={
      result:"",
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleDel=this.handleDel.bind(this);
    this.handleSolve=this.handleSolve.bind(this);
    this.handleDelPress = this.handleDelPress.bind(this)
    this.handleDelRelease = this.handleDelRelease.bind(this)

  }

  handleClick(id){
    this.setState((state)=> ({
      result: this.state.result + id
    }));
  }

  handleDel(){
    this.setState((state)=> ({
      result: this.state.result ? this.state.result.slice(0,-1) : "",
    }));
  }
  
 
  //should replace eval with a built in library to evaluate text
  handleSolve(){
    let answer;
    try{
      answer = eval(this.state.result).toString(10);
      //answer=Function(`'use strict'; return (${this.state.result})`)()

    }
    catch(err){
      this.state.result ? answer="Invalid input" : answer=""
    }

    this.setState((state)=> ({
      result: answer
    }));
  }

  handleDelPress(){
    this.buttonPressTimer = setTimeout(() => this.setState((state)=> ({
      result: ""
    })), 800);

    //add another section to this function giving a clear animation

  }

  handleDelRelease(e){
    clearTimeout(this.buttonPressTimer);
    e.preventDefault(); //uses the event to prevent the rightclick menu
  }

  handleCopyPress(){
    this.copyPressTimer = setTimeout(() =>{
      navigator.clipboard.writeText(this.state.result)
      this.setState((state)=> ({result: "Copied to clipboard"}))
      }, 500);
  }
//this.setState((state)=> ({result: "Copied to clipboard"}));
  handleCopyRelease(e){
    clearTimeout(this.copyPressTimer);
    e.preventDefault(); //uses the event to prevent the rightclick menu
  }


  render(){
    return(
      <div className="">
        <p className="result"
          onTouchStart={()=>this.handleCopyPress()}
          onTouchEnd={(e)=>this.handleCopyRelease(e)} 
          onMouseDown={()=>this.handleCopyPress()} 
          onMouseUp={(e)=>this.handleCopyRelease(e)} 
          onMouseLeave={(e)=>this.handleCopyRelease(e)}>{this.state.result}</p>
        <ButtonPad handleClick={this.handleClick} handleDel={this.handleDel} handleDelPress={this.handleDelPress} handleDelRelease={this.handleDelRelease}/>
        <EqualButton handleSolve={this.handleSolve} />
        
      </div>
    );
  }

}

export default Calculator;