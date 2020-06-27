import React from 'react';

const Result = ({ result, openPopup }) => {
    return (
        <div className="col-md-4 ">
            <div className="result">
                <img width="100%" className="img-fluid" src={result.Poster} alt="" onClick={() => openPopup(result.imdbID)} />
                <h3 className="text-center">{result.Title}</h3>
            </div>
        </div>
    );
}

export default Result;