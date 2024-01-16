import React from 'react'
import { useCountry } from '../contexte/ContryContext'
import FilterSearch from './FilterSearch'
import FilterRegion from './FilterRegion'
import { useEffect, useState } from 'react';


const Contry = () => {
    const {fetchCountriesName, fetchCountriesRegion} = useCountry()

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [contry, setContry] = useState([])

    
    
    const fetchCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            
            if (!response.ok) 
            throw new Error("Erreur lors de lagbfhfghfh récupération des données.");
        
        const data = await response.json();
        setContry(data);
        setLoading(false);
    } catch (error) {
            setLoading(false);
            setError("Une erreur s'est produite lors de la récupération des données.");
        }
      }

      useEffect(() => {
          fetchCountries();
        }, ); 
        
        if (isLoading) {
            return <p className="text-center">Chargement en cours...</p>;
        }
        if (error) {
            return <p>{error}</p>;
        }

  return (
    <div>
          
    <div>
      <div className="container d-flex justify-content-between mt-5">
        <div>
        <FilterSearch onSearch={fetchCountriesName}/>
        </div>
  
        <div>
        <FilterRegion onSelect={fetchCountriesRegion}/>
        </div>
      </div>
    </div>

    <div className="country mt-5" >
      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && <h4>{error}</h4>}

      {contry?.map((country, index) => (
        <div key={index}>
          <div className="country__card mb-3"> 
            <div className="country__img" >
              <img src={country.flags.png} alt="" />
            </div>

            <div className="country__data">
              <h3>{country.name.common}</h3>
              <h6>Population: {country.population}
              </h6>
              <h6> Region: {country.region}</h6>
              <h6>Capital: {country.capital}</h6>
            </div>
          </div>
          </div>
      ))}
    </div>
  </div>
  )
}

export default Contry
