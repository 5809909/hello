import React from "react";
import {Footer} from "../components/footer";
import {Header} from "../components/header";
import {FOOTER_TEXT, HEADER_TEXT} from "../constants";
import {ResultBody} from "../components/result-body";
import {ResultCount} from "../components/result-count";
import {SearchInput} from "../components/search-input";
import SearchSortType from "../components/search-sort-radiobtn";
import {SearchButton} from "../components/search-button";
import {Link} from "react-router-dom";

export const Home = () => {

    return (
        <div className="app">
            <div className="search-container">
                < Header text={HEADER_TEXT}/>
                <div className="search-form">
                    <p>FIND YOUR MOVIE</p>
                    < SearchInput />
                    <div className="sort-form-type">
                        < SearchSortType />
                      <Link to={'/search'} > < SearchButton className="search-btn"/></Link>
                    </div>
                </div>
            </div>
            <div className="result-container">
                <div className="result-line">
                    < ResultCount/>
                </div>
                < ResultBody />
            </div>
            )
            < Footer text={FOOTER_TEXT}/>
        </div>
    );
};



