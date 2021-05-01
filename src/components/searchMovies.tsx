import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movie, { MovieProps } from './movie';
import React, { ChangeEvent } from 'react';
import { omdbKey } from '../settings.json';

export interface SearchMoviesProps {
    
}
 
export interface SearchMoviesState {
    movies: MovieProps[];
}
 
class SearchMovies extends React.Component<SearchMoviesProps, SearchMoviesState> {
    
    private requestId: number;

    constructor(props: SearchMoviesProps) {
        super(props);
        this.requestId = 0;
        this.state = { 
            movies: []
        };
    }

    async componentDidMount() {
        let results: MovieProps[] = [];
        /*
        await fetch(`https://www.omdbapi.com/?apikey=${omdbKey}&s=adventure`)
            .then(response => response.json())
            .then(data => {
                results = data.Search.map((x: any): MovieProps => {
                    return { title: x.Title, imdbID: x.imdbID, url: x.Poster };
                })
            });*/
        results = [
            {
                "title": "Bill & Ted's Excellent Adventure",
                "imdbID": "tt0096928",
                "url": "https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg"
            },
            {
                "title": "Zathura: A Space Adventure",
                "imdbID": "tt0406375",
                "url": "https://m.media-amazon.com/images/M/MV5BMDc1NzM1OTgtOGYxMS00ZWE1LWEzZWMtNWEyOTI2NDJjOTU2XkEyXkFqcGdeQXVyNjQzNzA2NjM@._V1_SX300.jpg"
            },
            {
                "title": "Adventure Time",
                "imdbID": "tt1305826",
                "url": "https://m.media-amazon.com/images/M/MV5BZGY2ZGFkYjctOWY2Ni00MGQ5LWE4OTItNjJhNzA5MWFmMjk1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
            },
            {
                "title": "Pee-wee's Big Adventure",
                "imdbID": "tt0089791",
                "url": "https://m.media-amazon.com/images/M/MV5BYTQ2MmVlNzctZGE5Ni00MGMwLWJmMWYtODAzZmRlZTljMGEzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
            },
            {
                "title": "The Poseidon Adventure",
                "imdbID": "tt0069113",
                "url": "https://m.media-amazon.com/images/M/MV5BYmM0ZDRkZGEtNTFmNS00MDg1LThkNWItZmU1NmM1OGM0NTU4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            },
            {
                "title": "Free Willy 2: The Adventure Home",
                "imdbID": "tt0113114",
                "url": "https://m.media-amazon.com/images/M/MV5BZmZlNDBmMzctNmJiOC00YWZkLTk4MzYtOTU4NzZkMmUxMDRjXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg"
            },
            {
                "title": "The Oogieloves in the Big Balloon Adventure",
                "imdbID": "tt1520498",
                "url": "https://m.media-amazon.com/images/M/MV5BMTk0ODM0MzA0OV5BMl5BanBnXkFtZTcwODUyODc3Nw@@._V1_SX300.jpg"
            },
            {
                "title": "Olaf's Frozen Adventure",
                "imdbID": "tt5452780",
                "url": "https://m.media-amazon.com/images/M/MV5BOWQ1NjNiZTEtYzc3Zi00Nzk4LTg5MTYtNzc5NmJjYTg1MGQ4XkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
            },
            {
                "title": "Remo Williams: The Adventure Begins",
                "imdbID": "tt0089901",
                "url": "https://m.media-amazon.com/images/M/MV5BMzQzNjc4NDAtMTZmMC00NDUzLTg5MDctMWUzZTVkY2Y1NTE1XkEyXkFqcGdeQXVyMjcwNDczMjY@._V1_SX300.jpg"
            },
            {
                "title": "JoJo's Bizarre Adventure",
                "imdbID": "tt2359704",
                "url": "https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg"
            }
        ];
        
        this.setState({ movies: results });
        
    }

    async fetchMovies(query: string) {
        
        let id = this.requestId;
        await fetch(`https://www.omdbapi.com/?apikey=${omdbKey}&s=${query}`)
        .then((response: Response) => {
            if (!response.ok) throw new Error("Failed to fetch data");
            return response.json();
        })
        .then((data: any): MovieProps[] => {
            // Group the data on id because omdb can return duplicates
            let grouped: {[id: string]: MovieProps} = {};
            data.Search.forEach((x: any) => {
                grouped[x.imdbID] = { title: x.Title, imdbID: x.imdbID, url: x.Poster };
            });
            let results: MovieProps[] = [];
            for (let key in grouped) {
                results.push(grouped[key]);
            }
            return results;
            
        })
        .then((movies: MovieProps[]) => {
            // Only update the state if this is the most recent request
            if (this.requestId === id) 
                this.setState({ movies: movies });
        })
        .catch((e: Error) => {
            console.log(e);
        });
        
    }

    handleKeyUp = (event: ChangeEvent<HTMLInputElement>) => {
        this.requestId++;
        this.fetchMovies(event.target.value);
    }

    render() { 
        return (
            <React.Fragment>
                <div className="input-group my-3">
                    <input onChange={this.handleKeyUp} type="text" className="form-control form-control-lg" placeholder="Search Movies" aria-label="Search Movies" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-green" type="button"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
                <h4 className="my-4 text-dark">Showing Results ({this.state.movies.length})</h4>
                <div className="movie-container">
                    {this.state.movies.map(x => {
                        return (<Movie imdbID={x.imdbID}
                            title={x.title}
                            url={x.url}
                            key={x.imdbID} />)
                    })}
                </div>

            </React.Fragment>
        );
    }
}
 
export default SearchMovies;