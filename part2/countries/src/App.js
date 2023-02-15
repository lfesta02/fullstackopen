import { useEffect, useState } from 'react'
import axios from 'axios'
import Result from './components/Result'

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
      console.log(response.data)
    })
  }, [])

  const searchCountries = (e) => {
    const val = e.target.value
    setValue(val)
  }

  const searchedCountries = (value === '')
    ? []
    : countries.filter(c => c.name.common.toLowerCase().includes(value.toLowerCase()))


  return (
    <div>
      <form>
        Find countries: &nbsp;
        <input value={value} onChange={searchCountries} />
      </form>
      <Result countries={searchedCountries} />
    </div>
  );
}

export default App;
