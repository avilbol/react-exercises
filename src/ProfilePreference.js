import React, { Component } from 'react';
import './App.css';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

class ProfilePreference extends Component {
  render() {
    let props = this.props
    return (
      <li key={props.userName}>
       	{props.userName}'s favorite movie is {props.favoriteMovie}.
      </li>
    );
  }
}

export default ProfilePreference;
