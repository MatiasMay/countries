import React, {useEffect} from "react";
import Country from "./Country";
import OneCountry from "./OneCountry";

const Results = ({countriesToShow, handleCountryFilter, handleWeather,weather}) => {
    //Esta parte llama a la funcion que checa el clima, solo si ha cambiado la lista de paises a mostrar y solo cambia si solo hay un pais (por ahora)
    useEffect(() => {
        if (countriesToShow.length == 1){
            handleWeather()
        }
    },[countriesToShow])
    //Checamos que tipo de situacion es y devolvemos un mensaje, una lista de paises o un pais dependiendo de la situacion
    if(countriesToShow.length > 10){
        return <p>Too many matches, specify another filter</p>
    }else{
        if (countriesToShow.length > 1){
            return(
                <ul>
                    {countriesToShow.map( x => {
                        return(
                            <Country key = {x.numericCode} country={x} handleCountryFilter={handleCountryFilter}/>
                            )
                            })
                    }
                </ul>);
        }else{
            if(countriesToShow.length > 0){
                return (<OneCountry Countr={countriesToShow[0]} weather={weather}/>)
            }
            else{
                return <p>No result found</p>
            }
        }
    }
}

export default Results