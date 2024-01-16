import React, { useState } from 'react'

const FilterSearch = ({onSearch}) => {
    let FromControl = {
        width: '250px'
    }

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
    }

  return (
      <form className="form-control" onSubmit={handleSubmit} style={FromControl}>
            <input 
            type="search" 
            id="search" 
            placeholder="Search countries" 
            className="search"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
        </form>
    )
}

export default FilterSearch ;

// <div className="container d-flex justify-content-between">
// {/* <select id="select">
//     <option id="" disabled selected>Filter By Region</option>
//     <option value="africa">Africa</option>
//     <option value="Americ">Americas</option>
//     <option value="Asia">Asia</option>
//     <option value="Europe">Europe</option>
//     <option value="Oceanie">Oceania</option>
// </select> */}
// </div>