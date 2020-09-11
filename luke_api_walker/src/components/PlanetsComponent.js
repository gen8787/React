import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const PlanetsComponent = props => {
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => setPlanet(response.data))
            .catch(err => console.log(err))
    }, [props.id]);

    return (
        <>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water > 0 ? "true" : "false"}</p>
            <p>Population: {planet.population}</p>
        </>
    )
}

export default PlanetsComponent;