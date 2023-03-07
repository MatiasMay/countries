import React from "react";
//Shows one country name
const Country = ({country, handleCountryFilter}) => {
    return(<li>{country.name} <button type='button' onClick={handleCountryFilter} value={country.name}>Show</button></li>)
}

export default Country