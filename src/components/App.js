import React, {useState} from 'react';
import Cards from './Cards';
import Search from './Search';
import Character from "./Character";

const App = () =>{
    const [term, setTerm] = useState('');
    const [data, setData] = useState([]);

    return (
        <div className="ui container segment">
            <Search
                term = {term}
                setTerm = {setTerm}
                setData = {setData}
            />
            <Cards
                data = {data}
            />

            {/*<Character*/}
            {/*    term = {term}*/}
            {/*/>*/}
        </div>

    )
}

export default App;