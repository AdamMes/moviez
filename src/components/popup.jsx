import React from 'react';

const Popup = ({ selected, closePopup }) => {
    return (
        <div className="container-fluid">
            <div className="container">
                <section className="popup">
                    <div className="row">
                        <div className="col mb-2">
                            <button className="close p-2" onClick={closePopup}><img width="30px" src={require('../images/close.png')} alt="" /></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="plot d-flex align-items-center">
                                <img width="600px" className="img-fluid" src={selected.Poster} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <div className="content">
                                        <div className="row">
                                            <div className="col">
                                                <h2 className="h1 text-white text-center">{selected.Title} <span>({selected.Year})</span>
                                                    <span className="text-success h6"> Rating : {selected.imdbRating}</span></h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6"><p className="text-white text-center"><strong>Country</strong> : {selected.Country}</p></div>
                                            <div className="col-lg-3 col-md-6"><p className="text-white text-center"><strong>Language</strong> : {selected.Language}</p></div>
                                            <div className="col-lg-3 col-md-6"><p className="text-white text-center"><strong>Production</strong> : {selected.Production}</p></div>
                                            <div className="col-lg-3 col-md-6"><p className="text-white text-center"><strong>Runtime</strong> : {selected.Runtime}</p></div>
                                        </div>
                                        <div className="jumbotron">
                                            <div className="row">
                                                <div className="col">
                                                    <p className="h4 text-dark">Writers:</p>
                                                    <p className="text-dark">{selected.Writer}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="h4 text-dark">About the movie:</p>
                                                    <p className="text-dark">{selected.Plot}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="h4 text-dark">Actors:</p>
                                                    <p className="text-dark">{selected.Actors}</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">

                                </div>
                            </div>



                        </div>
                    </div>

                </section>
            </div>
        </div>

    );
}

export default Popup;