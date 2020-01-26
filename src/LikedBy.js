import React, { Component } from 'react';


class LikedBy extends Component {
  render() {
    const usersLikedBy = this.props.usersLikedBy
    let populated = usersLikedBy && usersLikedBy.length > 0
    return populated ? (
      <div>
      	<p>Liked By:</p>
        <ul>
          	{usersLikedBy.map((user)=>(
        		<li>{user.name}</li>
    		))}
      	</ul>
      </div>
    ) : (
      <div>
      	<p>{this.props.emptyMessage}</p>
      </div>
    )
  }
}

export default LikedBy;
