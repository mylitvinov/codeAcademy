import React from 'react';
 
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello world' };
    this.capitalize = this.capitalize.bind(this);
  }
 
  capitalize() {
    this.setState({
      message: this.state.message.toUpperCase()
    });
  }
 
  render() {
    return (
      <button onClick = {this.capitalize} >
        {this.state.message}
      </button>
    );
  }
}