import React from 'react';
import './Tile.css'

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isHovered: false
    }

    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEnter(){
    this.setState(state=>({ //passing in the previous state
      isHovered: true,
    }));
  }

  handleExit(){
    this.setState(state=>({
      isHovered:false,
    }))
  }

  render(){
    return (
      <div onMouseEnter={this.handleEnter} onMouseLeave={this.handleExit} className="tileStyle">
        <p className="textStyle">{this.props.text} {this.state.isHovered ? "Mouse in!" : "Mouse out!"}</p>
      </div>
    );
  }
}

export default Tile;