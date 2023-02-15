import { useState } from "react"
import Country from "./Country"

const ListEntry = ({ country }) => {
    const [show, setShow] = useState(false)

    if(!show) {
        return (
            <div>
            {country.name.common} 
            &nbsp;
            <button onClick={() => setShow(!show)}>show</button>
            </div>
        )
    } else {
        return (
            <>
            <Country country={country}/> 
            &nbsp;
            <button onClick={() => setShow(!show)}>hide</button>
            </>
        )
    }
}

export default ListEntry