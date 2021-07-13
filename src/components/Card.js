import React from 'react';
import './index.css';

const Card = ({data}) =>{
    if(!data){
        return null;
    }

    return(
        <div className="column">
            <div className="ui fluid card" >
                <div className="image">

                </div>
                <div className="content">
                    <span>{data.character}</span>
                    {/*<a className="header">Naruto</a>*/}
                    <div className="meta">
                        <span className="date">{data.anime}</span>
                    </div>
                    <div className="description">
                        {data.quote}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
