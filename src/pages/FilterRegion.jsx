import React from 'react'

const FilterRegion = ({onSelect}) => {


    const handleSelect = (e) => {
        const regionName = e.target.value
        onSelect(regionName);
    }

  return (
        <select onChange={handleSelect}>
            <option  disabled selected>Filter By Region</option>
            <option value="africa">Africa</option>
            <option value="Americ">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select> 

    )
}

export default FilterRegion ;

