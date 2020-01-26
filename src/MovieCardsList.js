import React from 'react';
import MovieCard from './MovieCard';

const MovieCardsList = (props) => {
  	const usersByMovie = getUsersByMovie(props.profiles)
    const movieCards = Object.keys(props.movies).map(id => (
      <MovieCard
        key={id}
        users={props.users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={props.movies[id]}
      />
    ))
    return <ul>{movieCards}</ul>
  }

const getUsersByMovie = (profiles) => {
	const usersByMovie = {}

    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;

      if (usersByMovie[movieID]) {
        usersByMovie[movieID].push(profile.userID);
      } else {
        usersByMovie[movieID] = [profile.userID];
      }
    })
  
  	return usersByMovie
}

export default MovieCardsList;
