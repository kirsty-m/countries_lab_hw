import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail'

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])
    //empty array triggers the getCountries immediately

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClicked = (country) => {
        setSelectedCountry(country);
    }

    return (
        <div className="main-container">
            <CountryList countries={countries} onCountryClicked={onCountryClicked}/>
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
        </div>
    )
}

export default CountryContainer;
