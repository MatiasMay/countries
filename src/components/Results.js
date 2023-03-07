import React, {useEffect} from "react";
import Country from "./Country";
import OneCountry from "./OneCountry";

const Results = ({countriesToShow, handleCountryFilter, handleWeather,weather}) => {
    //This part calls the const that changes weather, but only if the result is only one country
    useEffect(() => {
        if (countriesToShow.length == 1){
            handleWeather()
        }
    },[countriesToShow])
    //Checks the situation and shows a result according to the number of resulting countries
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