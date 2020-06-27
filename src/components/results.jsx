import React from 'react';
import Result from './result'

const Results = ({ results, openPopup }) => {

    if (results) {
        return (
            <section className="results row mb-3">
                {results.map((result) => (
                    <Result key={result.imdbID} result={result} openPopup={openPopup} />
                ))}
            </section>
        );
    } else {
        return (
            <div className="jumbotron"><p className="not-found text-dark h4 text-center">The Movie you search is not found , please try again. </p></div>
        )
    }
}

export default Results;