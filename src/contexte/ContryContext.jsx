import React, { createContext, useContext, useState, useEffect } from 'react'


const ContryContext = createContext()

const ContryContextProvider = ({chiildren}) => {

    const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        
        if (!response.ok) 
          throw new Error("Erreur lors de la récupération des données.");

        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Une erreur s'est produite lors de la récupération des données.");
      }
    }

    const fetchCountriesName = async (inputSearch) => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${inputSearch}`);
        
        if (!response.ok) 
          throw new Error("Erreur lors de la récupération des données.");

        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Une erreur s'est produite lors de la récupération des données.");
      }
    }

    const fetchCountriesRegion = async (selecte) => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${selecte}`);
        
        if (!response.ok) 
          throw new Error("Erreur lors de la récupération des données.");

        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Une erreur s'est produite lors de la récupération des données.");
      }
    }

    useEffect(() => {
    fetchCountries();
    }, []); 
    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const value = {
        countries,
        isLoading,
        error,
        fetchCountries,
        fetchCountriesName,
        fetchCountriesRegion
    }
    
    return <ContryContext.Provider value={value}>
        {chiildren}
    </ContryContext.Provider>

}

export const useContry = () => {
    return useContext(ContryContext);
}

export default ContryContextProvider;
