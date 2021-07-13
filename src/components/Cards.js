import React from 'react';
import Card from './Card';
import {PropTypes} from 'prop-types';

const Cards = ({data}) =>{
    console.log(data);
    if(!Array.isArray(data)){
        return <div>No such Anime</div>
    }

    const list = data.map((quote, index)=>{
        return <Card key = {index} data = {quote}/>
    })

    return(
        <div className="ui container">
            <div className="ui four column grid">
                {list}
            </div>
        </div>
    )
}

Cards.propTypes = {
    data: PropTypes.array
}

export default Cards;