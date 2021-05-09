import React, { ChangeEvent } from "react";
import logo from "./logo.svg";
import * as FontAwesomeIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MovieProps } from "./components/movie";
import Movies, { MoviesProps } from "./components/movies";
import { omdbKey } from './settings.json';
import "./App.css";



interface AppProps {}

interface AppState {
	movies: MovieProps[];
	nominations: MovieProps[];
	searching: boolean;
}

class App extends React.Component<AppProps, AppState> {
	private requestId: number;
	private worker: any;

	constructor(props: AppProps) {
		super(props);
		this.requestId = 0;
		this.state = {
			movies: [],
			nominations: [],
			searching: false,
		};
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
			let grouped: { [id: string]: MovieProps } = {};
			data.Search.forEach((x: any) => {
				grouped[x.imdbID] = {
					title: x.Title,
					imdbID: x.imdbID,
					url: x.Poster,
					onClick: () => { this.nominate(x); },
					nominated: this.state.nominations.filter((y) => y.imdbID === x.imdbID).length > 0,
					nominatedSection: false,
				};
			});
			let results: MovieProps[] = [];
			for (let key in grouped) {
				results.push(grouped[key]);
			}
			return results;
		})
		.then((movies: MovieProps[]) => {
			// Only update the state if this is the most recent request
			if (this.requestId === id) this.setState({ movies: movies, searching: false });
		})
		.catch((e: Error) => {
			console.log(e);
		});
	}

	private nominate(movie: MovieProps) {
		if (this.state.nominations.length >= 5) { return; }
		let nominations = [...this.state.nominations];
		let movies = [...this.state.movies];
		let mv = movies.filter((x) => x.imdbID === movie.imdbID)[0];
		mv.nominated = true;
		let newMv = { ...mv };
		newMv.nominatedSection = true;
		newMv.onClick = () => {
			this.deNominate(newMv);
		};
		nominations.push(newMv);
		this.setState({ nominations: nominations, movies: movies });
	}

	private deNominate(movie: MovieProps) {
		let movies = [...this.state.movies];
		let mv = movies.filter((x) => x.imdbID === movie.imdbID)[0];
		if (mv) {
			mv.nominated = false;
			mv.onClick = () => {
				this.nominate(mv);
			};
		}
		let nominations = [...this.state.nominations];
		nominations = nominations.filter((x) => x.imdbID !== movie.imdbID);

		this.setState({ nominations: nominations, movies: movies });
	}

	handleKeyUp = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({searching: true });
		this.requestId++;
		// because I already used half of my api requests
		clearTimeout(this.worker);
		this.worker = setTimeout(() => {
			this.fetchMovies(event.target.value);
		}, 300);
	};

	getSearchIcon(): JSX.Element {
		if (this.state.searching)
			return <FontAwesomeIcon icon={FontAwesomeIcons.faSpinner} spin></FontAwesomeIcon>
		else
			return <FontAwesomeIcon icon={FontAwesomeIcons.faSearch}></FontAwesomeIcon>
	} 

	render() {
		return (
			<React.Fragment>
				<div className="jumbotron jumbotron-fluid bg-dark text-light text-center">
					<h1 className="display-1">The Shoppies</h1>
					<h3 className="lead my-4">
						Nominate your favourite movies for the Shoppies!
					</h3>
					<div className="container">
						<div className="input-group">
							<input
								onChange={this.handleKeyUp}
								type="text"
								className="form-control form-control-lg"
								placeholder="Search Movies"
								aria-label="Search Movies"
								aria-describedby="basic-addon2"
							/>
							<div className="input-group-append">
								<button className="btn btn-light" type="button">
									{this.getSearchIcon()}
								</button>
							</div>
						</div>
					</div>					
				</div>
				<div className="container">
					<div className="row mb-4">
						<div className="col">
							<h4 className="my-4 text-dark">
								Nominations ({this.state.nominations.length}/5)
							</h4>
							<hr className="my-4 bg-light" />
							<Movies movies={this.state.nominations} />
						</div>
					</div>
					<div className="row mt-4">
						<div className="col">
							<h4 className="my-4 text-dark">
								Showing Results ({this.state.movies.length})
							</h4>
							<hr className="my-4" />
							<Movies movies={this.state.movies} />
						</div>
					</div>					
				</div>
			</React.Fragment>
		);
	}
}

export default App;
