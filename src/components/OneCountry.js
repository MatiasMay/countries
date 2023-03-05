import React from "react";

const OneCountry = ({Countr}) => {
    return(<div>
        <h1>{Countr.name}</h1>
        <p>Capital: {Countr.capital}</p>
        <p>Population: {Countr.population}</p>
        <h2>Languages</h2>
        <ul>
            {Countr.languages.map( x => {
                return(
                        <li key={x.iso639_1}>{x.name}</li>
                    )
                })
            }
        </ul>
        <img src={Countr.flags.png}/>
        </div>
    )
}

export default OneCountry