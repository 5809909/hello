import React from "react";
import {Footer} from "../components/footer";
import {Header} from "../components/header";
import {FOOTER_TEXT, HEADER_TEXT} from "../constants";
import {ResultCount} from "../components/result-count";
import {ResultFilter} from "../components/result-filter";
import {ResultBody} from "../components/result-body";
import {SearchInput} from "../components/search-input";
import {SearchButton} from "../components/search-button";
import SearchSortType from "../components/search-sort-radiobtn";
import films from '../data/films.json';

export const Search = () => {

    return (
        <div className="app">
            <div className="search-container">
                < Header text={HEADER_TEXT}/>
                <div className="search-form">
                    <p>FIND YOUR MOVIE</p>
                    < SearchInput text="CAT"/>
                    <div className="sort-form-type">
                        < SearchSortType/>
                        < SearchButton className="search-btn"/>
                    </div>

                </div>
            </div>
            <div className="result-container">
                <div className="result-line">
                    < ResultCount text="9 films found"/>
                    < ResultFilter/>
                </div>
                < ResultBody count={9} data={films}/>
            </div>
            < Footer text={FOOTER_TEXT}/>
        </div>
    );
};

