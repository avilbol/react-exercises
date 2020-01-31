import React, { Component } from 'react';

class MirrorText extends Component {
  render() {
    return (
      <div className="container">
      	<p className="echo">Echo:</p>
      	<p>{this.props.mirroredText}</p>
	  </div>
    );
  }
}

export default MirrorText;
