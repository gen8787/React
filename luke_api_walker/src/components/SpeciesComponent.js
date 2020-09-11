import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const SpeciesComponent = props => {
    const [species, setSpecies] = useState({})

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/species/${props.id}`)
            .then(response => setSpecies(response.data))
            .catch(err => console.log(err))
    }, [props.id]);

    return (
        <>
            <h1>{species.name}</h1>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation}</p>
            <p>Average Lifespan: {species.average_lifespan} years</p>
            <p>Language: {species.language}</p>
        </>
    )
}

export default SpeciesComponent;