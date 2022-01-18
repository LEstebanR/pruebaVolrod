import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import Card from '../components/Card.jsx'
import '../assets/styles/result.css'

const Result = (props) => {
  const searchPokemon = (useParams().search)
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      .then(res => {
        setPokemon(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [searchPokemon])

  return (
    <div className="container-result">
      {pokemon.name ? <Card name={pokemon.name} photo={pokemon.sprites.other.dream_world.front_default}/> : <h1>Oops this Pokemon doesn't exist... please try again</h1>}
      <button><Link to="/">Back</Link></button>
    </div>
  );
}

export default Result;