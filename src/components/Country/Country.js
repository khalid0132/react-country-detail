import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';
const Country = (props) => {
    const {name, capital, region, population} = props.country;
    const history = useHistory();
    function handleClick(countryName){
        history.push(`/country/${countryName}`);
    }

    return (
        <div className ="country-design">
            <h3>Name: {name}</h3>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <Link to={`/country/${name}`}><button>Country info:</button></Link>
            <p><button onClick={()=>handleClick(name)}>Click to show detail</button></p>
            {/* onClick={()=>handleClick(name)} */}
        </div>
    );
};

export default Country;