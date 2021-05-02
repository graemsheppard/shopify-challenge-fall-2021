import React from 'react';

export interface MovieProps {
    title: string;
    imdbID: string;
    url: string;
    nominated: boolean;
    nominatedSection: boolean;
    onClick: () => void;
}
 
class Movie extends React.Component<MovieProps> {

    render() { 
        return (
            <div className="card movie-card" >
                <img className="card-img-top movie-card-img" src={this.props.url} alt={`Movie poster for ${this.props.title}`} />
                <div className="card-body movie-card-body">
                    <span className="font-weight-normal">{this.props.title}</span>
                    <button disabled={this.props.nominated && !this.props.nominatedSection} onClick={this.props.onClick} type="button" className={this.getButtonClasses()}>{this.getButtonText()}</button>
                </div>
            </div>   
        );
    }

    private getButtonText(): string {
        return this.props.nominatedSection ? "Remove" : (this.props.nominated ? "Nominated" : "Vote");
    }

    private getButtonClasses(): string {
        let res = "btn mt-2 ";
        res += this.props.nominatedSection ? "btn-danger" : (this.props.nominated ? "btn-secondary" : "btn-primary");
        return res;
    }
}
 
export default Movie;