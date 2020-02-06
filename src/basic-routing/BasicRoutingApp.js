import React from 'react';
import { BrowserRouter as Router,
         Route,
         Link
} from 'react-router-dom'


const movies = {
	romance: [
		{
  			name: "Titanic", 
  			link: "http://pelisonline.co/titanic"
  		},
		{
        	name: "Eternal love",
            link: "http://pelisonline.co/eternal-love"
        }
	],
	terror: [
    	{
      		name: "Anabel",
      		link: "http://pelisonline.co/anabel"
      	}
    ]
}

const MovieDetail = ( { match, categoryName } ) => {
    let movieData = movies[categoryName].filter(
      movie => movie.name === match.params.movieName)
    return (
    	<div>
            <h4>{movieData[0].name}</h4>
            <a href={movieData[0].link}>Link</a>
        </div>
    )
}

const Categories = () => (
  	<Router>
  		<ul>
          <li key="romance">
			<Link to='/romance'>romance</Link>
          </li>
          <li key="terror">
  			<Link to='/terror'>terror</Link>
  		  </li>
        </ul>
  		<Route path="/romance" render={({match}) => (
  			<MoviesByCategory categoryName="romance" match={match}/>)} />
  		<Route path="/terror" render={({match}) => (
  			<MoviesByCategory categoryName="terror" match={match}/>)} />
  	</Router>
)

const MoviesByCategory = ({ match, categoryName }) => (
  	<ul>
  	  {movies[categoryName].map((movie) => (
  		<li key={movie.name}>
  			<Link to={`${match.url}/${movie.name}`}>{movie.name}</Link>
        </li>
	  ))}
      <Route path={`${match.path}/:movieName`} render={( { match } ) => (
		<MovieDetail {...{match, categoryName}} />
	  ) }/>
    </ul>
)

const BasicRoutingApp = () => (<Categories />)

export default BasicRoutingApp
