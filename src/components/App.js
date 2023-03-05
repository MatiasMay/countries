import axios from "axios";
import React, {useState,useEffect} from "react";
import Results from "./Results";




const App = () => {
    const [countries, setCountries] = useState([])
    const [countryFilter, setCountryFilter] = useState('')
    useEffect (() => {
        axios.get('https://restcountries.com/v2/all')
        .then((response) => {
            setCountries(response.data)
        })
    },[])

    const handleCountryFilter = (event) => {
        setCountryFilter(event.target.value)
    }
    const countriesToShow = countries.filter(x => x.name.toLowerCase().includes(countryFilter.toLocaleLowerCase()))
    return (
        <div>
            <p>Find countries: <input value = {countryFilter} onChange={handleCountryFilter}></input></p> 
            <Results countriesToShow= {countriesToShow} handleCountryFilter={handleCountryFilter}/>
        </div>
    )
}

export default App