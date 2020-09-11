import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const StarshipsComponent = props => {
    const [starship, setStarship] = useState({})

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/starships/${props.id}`)
            .then(response => setStarship(response.data))
            .catch(err => console.log(err))
    }, [props.id]);

    return (
        <>
            <h1>{starship.name}</h1>
            <p>Model: {starship.model}</p>
            <p>Class: {starship.starship_class}</p>
            <p>Length: {starship.length} meters</p>
            <p>Max Speed: {starship.max_atmosphering_speed}</p>
        </>
    )
}

export default StarshipsComponent;