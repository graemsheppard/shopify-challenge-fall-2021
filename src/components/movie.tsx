import React from 'react';

export interface MovieProps {
    title: string;
    imdbID: string;
    url: string;
}
 
export interface MovieState {
    
}
 
class Movie extends React.Component<MovieProps, MovieState> {
    //state = { :  }

    render() { 

        return (
            <div className="card movie-card" >
                <img className="card-img-top movie-card-img" src={this.props.url} alt={`Movie poster for ${this.props.title}`} />
                <div className="card-body movie-card-body">
                    <span className="font-weight-normal">{this.props.title}</span>
                    <button type="button" className="btn btn-primary mt-2">Vote</button>
                </div>
            </div>
             
        );
    }
}
 
export default Movie;