import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Card from "../components/Card.jsx"
import '../assets/styles/random.css'
import axios from "axios"

const Random = () => {
  const [pokemons, setPokemons] = useState([])
  const [randomIndex, setRandomIndex] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      setPokemons(response.data.results)
    }
    getPokemons()
  },[])

  useEffect(() => {
    let aux = []
    const getRandomIndex = async() => {
      for (let i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * pokemons.length)
        await axios.get(pokemons[random].url)
          .then(response => {
            aux.push(response.data)
          })
          .catch(error => {
            console.error(error)
          })
      }
      setRandomIndex(aux)
      setLoading(false)
    }
    getRandomIndex()
  }, [pokemons])


  

  console.log(randomIndex)
  return (
    <div className="container-random">
      <div className="container-card">
      {loading ? <p>Loading...</p> : randomIndex.map((pokemon) => (
        <Card 
        name={pokemon.name} 
        photo={pokemon.sprites.other.dream_world.front_default}
        />
      )) }
      </div>
      <button><Link to="/">Back</Link></button>

    </div>
  )
}


export default Random