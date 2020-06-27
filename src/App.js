import React, { useState } from 'react';
import Serach from './components/search';
import Results from './components/results';
import Popup from './components/popup';

import axios from 'axios';


function App() {
  const [state, setState] = useState({
    s: "",
    page: 1,
    results: [],
    selected: {}
  })
  const apiurl = "http://www.omdbapi.com/?apikey=76031d08";
  const search = (e) => {
    if (e.key === "Enter") {

      axios(apiurl + "&s=" + state.s + "&page=" + state.page).then(({ data }) => {
        let results = data.Search;
        var num = data.Search;
        console.log(num);
        setState(prevState => {
          return { ...prevState, results: results }
        })

      })
    }
  };


  const handleInput = (e) => {
    let s = e.target.value.trim();
    console.log(s);

    setState(prevState => {
      return { ...prevState, s: s }
    });

  }

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);


      setState(prevState => {
        return { ...prevState, selected: result }
      })
    })
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    })
  }

  return (

    <div className="App">
      <img src={require('./images/popcorn.jpg')} alt="background" id="background" />
      <div className="container-fluid">
        <header className="mt-4 ">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <a href="/"><img className="img-fluid mx-auto" src={require('./images/logo.png')} alt="logo moviez" /></a>
              </div>

            </div>
            <div className="row">
              <div className="col">
                <h1 className="header-text h4 text-center mt-2">Welcom to Moviez Website. Here you can search your movie name and get details about him.</h1>
              </div>
            </div>

          </div>
        </header>
        <main className="container">
          <div className="row">
            <div className="col-12">
              <Serach handleInput={handleInput} search={search} />
            </div>

            <div className="col-12">
              <Results results={state.results} openPopup={openPopup} />

            </div>
          </div>


          {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}

        </main>
      </div>
    </div>
  );
}

export default App;
