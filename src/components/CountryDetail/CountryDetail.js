import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    let {countryName} = useParams();
    const [exactCountry, setExactCountry] = useState([])
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        // console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setExactCountry(data)
            console.log(data)
        })
    },[])
    const {population, capital, currency} = exactCountry;
    
    return (
        <div>
            <h1>Country: {countryName}</h1>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <p>Currency: {currency}</p>
        </div>
    );
};

export default CountryDetail;