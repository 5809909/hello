import React from 'react';
import {FilmItem} from "./filmItem";

export const ResultBody = (props) => {
     const data = props.data;

    return (!props.count) ? (
            <p className="result-text">
                No films found
            </p> )
        : (
            <div className="cards">

                {data.map((film, index) =>
                    <div key={index}  >
                        <FilmItem film={film} />
                    </div>) }
        </div>  )

};
