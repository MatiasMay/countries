import React from "react";
//Aqui devolvemos los datos de un solo pais
const OneCountry = ({Countr, weather}) => {
    return(<div>
        <h1>{Countr.name}</h1>
        <p>Capital: {Countr.capital}</p>
        <p>Population: {Countr.population}</p>
        <h2>Languages</h2>
        <ul>
            {Countr.languages.map( x => {
                return(
                        <li key={x.iso639_2}>{x.name}</li>
                    )
                })
            }
        </ul>
        <img src={Countr.flags.png}/>
        <h2>Weather in {Countr.capital}</h2>
        <p>Temperature: {weather.current.temperature} Celcius</p>
        <img src={weather.current.weather_icons[0]} alt='weather icon'/>
        <p>Wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div>
    )
}

export default OneCountry