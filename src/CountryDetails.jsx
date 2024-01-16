// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const CountryDetails = () => {
//   const [country, setCountry] = useState(null);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const { id } = useParams();

//   useEffect(() => {
//     const fetchCountryDetails = async () => {
//       try {
//         const response = await fetch("https://restcountries.com/v3.1/all");

//         if (!response.ok) {
//           throw new Error("Erreur lors de la rÃ©cupÃ©ration des donnÃ©es.");
//         }

//         const data = await response.json();
//         const selectedCountry = data[id];

//         if (!selectedCountry) {
//           throw new Error("Pays non trouvÃ©.");
//         }

//         setCountry(selectedCountry);
//         setLoading(false);
//       } catch (error) {
//         setError("Une erreur s'est produite lors de la rÃ©cupÃ©ration des dÃ©tails du pays.");
//         setLoading(false);
//       }
//     };

//     fetchCountryDetails();
//   }, [id]);

//   if (isLoading) {
//     return <p>Chargement en cours...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h1>DÃ©tails du pays</h1>
//       <img src={country.flags.png} alt="" />
//       <h2>{country.name.common}</h2>
//       <p><strong>Population:</strong> {country.population}</p>
//       <p><strong>RÃ©gion:</strong> {country.region}</p>
//       <p><strong>Capitale:</strong> {country.capital}</p>
//       {/* Ajoutez d'autres dÃ©tails du pays selon vos besoins */}
//     </div>
//   );
// };

// export default CountryDetails;