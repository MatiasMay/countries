import React from "react";

const Country = ({country, handleCountryFilter}) => {
    return(<li>{country.name} <button type='button' onClick={handleCountryFilter} value={country.name}>Show</button></li>)
}

export default Country