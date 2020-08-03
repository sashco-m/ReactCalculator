import React from 'react';
import './Button.css';

class Toggle extends React.Component {
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
      <button className={this.props.class} onClick={()=>this.props.handleClick(this.state.title)}>
        {this.state.title}
      </button>
    );
  }
}

export default Toggle;