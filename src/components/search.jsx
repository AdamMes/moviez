import React from 'react';

const Serach = ({ handleInput, search }) => {
    return (
        <section className="searchbox-warp">
            <input className="searchbox form-control"
                type="text"
                placeholder="Search for movie"
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    );
}

export default Serach;