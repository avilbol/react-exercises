import React from 'react';

const TogglButton = (props) => (
  <button onClick={props.handleToggl}>
	{props.toggl ? props.onText : props.offText}
  </button>
)

export default TogglButton;