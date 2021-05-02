import * as React from 'react';
import Movie, { MovieProps } from './movie';

export interface MoviesProps {
    movies: MovieProps[];
}
 
export interface MoviesState {
    
}
 
class Movies extends React.Component<MoviesProps, MoviesState> {
    
    render() { 
        return (
            <div className="movie-container">
                {this.props.movies.map(x => {
                    return (<Movie imdbID={x.imdbID}
                        title={x.title}
                        url={x.url}
                        key={x.imdbID}
                        nominated={x.nominated}
                        nominatedSection={x.nominatedSection}
                        onClick={x.onClick}
                    />)
                })}
        </div>
        );
    }
}
 
export default Movies;
