import React from 'react';

class DelButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.name,
      };

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }


  render() {
    return (
      <button className={this.props.class} 
          onClick={()=>this.props.handleClick(this.state.title)} 
          onTouchStart={()=>this.props.handleDelPress()} 
          onTouchEnd={(e)=>this.props.handleDelRelease(e)} 
          onMouseDown={()=>this.props.handleDelPress()} 
          onMouseUp={(e)=>this.props.handleDelRelease(e)} 
          onMouseLeave={(e)=>this.props.handleDelRelease(e)}>
        {this.state.title}
      </button>
    );
  }
}

export default DelButton;