import Country from "./Country"
import ListEntry from "./ListEntry"

const Result = ({ countries }) => {
    if(countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (countries.length <= 10 && countries.length > 1) {
        return (
            countries.map(c => 
                <ListEntry key={c.cca3} country={c}/>)
        )
    } else if (countries.length === 1) {
        return <Country country={countries[0]} />
    } else {
        return null
    }
    
}

export default Result