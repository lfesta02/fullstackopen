const Country = ({ country }) => {
    const languages = []
    for(let l in country.languages) {
        languages.push(country.languages[l])
    }

    return (
        <>
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital}</div>
        <div>Population: {country.population}</div>
        <h3>Languages</h3>
        <ul>
            {languages.map(l => {
                return <li key={languages.indexOf(l)}>{l}</li>
            })}
        </ul>
        <img src={country.flags["png"]} alt={country.flags["alt"]}/>
        </>
    )    
}

export default Country
