import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([])
    // useEffect(() =>{
    //     fetch('https://restcountries.eu/rest/v2/all')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])

    // axios always wrappers with extra data for all the information of array or object. It's auto formatted to json file 
    useEffect(()=>{
        axios('https://restcountries.eu/rest/v2/all')
        .then(data => setCountries(data.data))

    },[])
    return (
        <div>
            <h1>Home info: {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;