import React from "react";
import {Header} from "../components/header";
import {FOOTER_TEXT, HEADER_TEXT} from "../constants";
import {ResultCount} from "../components/result-count";
import {ResultBody} from "../components/result-body";
import {Footer} from "../components/footer";
import filmProp from '../data/film.json';
import films from '../data/director.json';
import {SearchButton} from "../components/search-button";
import {Link} from "react-router-dom";


export const Film = () => {
	const film = filmProp[0];
	return (
		<div className="app">
			<div className="film-container">
				<div className="film-search-button">
					< Header text={HEADER_TEXT}/>

					<Link to={'/'}> < SearchButton className="search-btn-return"/></Link>
				</div>
				<div className="film-info">
					<div className="film-cover">
						<img className="film-image"  src={film.image} alt={film.title}/>
					</div>

					<div className="film-properties">
						<div className="film-title">
							{film.title}
							<span className="film-rating">
								{film.rating}
							</span>
						</div>

						<div className="film-genre">
							{film.genre}
						</div>

						<div className="film-year">
								{film.year}
								<span className="film-duration">
							{film.duration}
							</span>
              </div>

						<div className="film-description">
							{film.description}
						</div>
						<div className="film-director">
							Director: {film.director}
						</div>
						<div className="film-cast">
							Cast: {film.cast}
						</div>
					</div>
				</div>


			</div>
			<div className="result-container">
				<div className="result-line">
					< ResultCount text="Films by Lawrence Guterman"/>
				</div>
				< ResultBody count={9} data={films}/>
			</div>
			< Footer text={FOOTER_TEXT}/>
		</div>
	);
};

