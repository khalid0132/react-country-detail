import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css'

const CountryDetail = () => {
    let {countryName} = useParams();
    const [exactCountry, setExactCountry] = useState([])
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        // console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setExactCountry(data[0])
            console.log(data)
        })
    },[])
    const {population, capital, flag} = exactCountry;
    
    return (
        <div className ="country-detail">
            <h1>Country: {countryName}</h1>
            <p><img style={{width:'100px'}} src={flag} alt=""/></p>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            {/* <p>Currency: {currencies}</p> */}
        </div>
    );
};

export default CountryDetail;