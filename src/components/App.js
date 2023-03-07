import axios from "axios";
import React, {useState,useEffect} from "react";
import Results from "./Results";




const App = () => {
    const [countries, setCountries] = useState([])
    const [weather, setWeather] = useState({'current':{'temperature':0,'weather_icons':[''],'wind_speed':0,'wind_dir':''}})
    const [lastWeather, setLastWeather] = useState('')
    const [countryFilter, setCountryFilter] = useState('')
    //The useEffect that shows the list of countries
    useEffect (() => {
        axios.get('https://restcountries.com/v2/all')
        .then((response) => {
            setCountries(response.data)
        })
    },[])
    //Handler for country filter
    const handleCountryFilter = (event) => {
        setCountryFilter(event.target.value)
    }
    //A handler that changes the weather part, but only if not the same capital as the last search (I don't have unlimited searches)
    const handleWeather = () => {
        if (lastWeather !== countriesToShow[0].capital){
            setLastWeather(countriesToShow[0].capital)
            console.log('http://api.weatherstack.com/current?access_key='+process.env.REACT_APP_API_KEY+'&query='+encodeURIComponent(countriesToShow[0].capital.trim()))
            axios.get('http://api.weatherstack.com/current?access_key='+process.env.REACT_APP_API_KEY+'&query='+encodeURIComponent(countriesToShow[0].capital.trim()))
            .then((response) => {
                console.log(response.data)
                setWeather(response.data)
            })
        }else{
            console.log('No, no más peticiones')
        }
    }
    const countriesToShow = countries.filter(x => x.name.toLowerCase().includes(countryFilter.toLocaleLowerCase()))
    return (
        <div>
            <p>Find countries: <input value = {countryFilter} onChange={handleCountryFilter}></input></p> 
            <Results countriesToShow= {countriesToShow} handleCountryFilter={handleCountryFilter} handleWeather={handleWeather} weather={weather}/>
        </div>
    )
}

export default App