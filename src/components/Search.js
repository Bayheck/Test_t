import React from 'react';

const Search = ({term, setTerm, setData}) =>{
    const submission = (event) =>{
        event.preventDefault();

        fetch(`https://animechan.vercel.app/api/quotes/character?name=${term}`)
            .then(response => response.json())
            .then(quotes => setData(quotes))
            .catch(error => console.log(error.message))

    }

    return(
        <form className="ui form formochka" onSubmit={(event) =>submission(event)}>
            <div className="ui fluid category search">
                <div className="ui icon input">
                    <input onChange = {(e) => setTerm(e.target.value)} value = {term} className="prompt" type="text" placeholder="Search anime..."/>
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
        </form>
    );
}

export default Search;