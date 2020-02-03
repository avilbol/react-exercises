import React from 'react';

const UserList = (props) => {
  	const usersData = props.users.map((user)=>{
        let gamesPlayed = props.showGamesPlayed ? user.gamesPlayed : '*'
        return (<li key={user.username}>{user.username} played {gamesPlayed} games </li>)
    	})
	return (		
  		<ol>
  			{usersData}
  		</ol>
	)    
}

export default UserList;
