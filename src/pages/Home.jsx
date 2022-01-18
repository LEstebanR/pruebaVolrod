import { useState, useEffect } from "react"
import axios from "axios"
import Form from '../components/Form.jsx'
import '../assets/styles/home.css'

const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      setPokemons(response.data.results)
    }
    getPokemons()
  },[])

  return (
    <div className="container">
      <img className="logo" src="https://res.cloudinary.com/lesteban/image/upload/v1642512325/Logos/pngwing.com_w0gyym.png" alt="logo"/>
      <Form />
      <div className="examples">
        {pokemons.map((pokemon, i) => (
          <p key={i}> - {pokemon.name} - </p>
        ))}
      </div>
    </div>
  )
}

export default Home