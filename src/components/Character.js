import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Character = ({term}) =>{
    const [img, setImg] = useState([]);

    useEffect(()=>{
            const {data} = axios.get("https://api.jikan.moe/v3/search/anime",{
                params:{
                    q: term,
                    page: 1
                }
            });
            console.log(data);
    }
    )

    return (
        <div>
            Character
        </div>
    )
}

export default Character;