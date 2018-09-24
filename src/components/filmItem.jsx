import React from 'react';
import {Link} from 'react-router-dom';

export function FilmItem({film}) {
    return (
        <Link  to={`/film/${film.title}`}>
            <div className="item-card">
                <img className="item-image" src={film.image} alt={film.title}/>
                <div className="item-text">
                    <div className="item-title">{film.title}</div>
                    <div className="item-year">{film.year}</div>
                </div>
                <div className="">{film.genre}</div>
            </div>
        </Link>
    );
}

