import '../assets/styles/form.css'
import { useState } from 'react'
import { Link } from "react-router-dom"

const Form = () => {
  const [search, setSearch] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
    
  }

  const submit = (e) => {
    e.preventDefault()
    window.location.href = `/${search}`
  }


  return (
    <div className="container-form">
      <form onSubmit={submit}>
        <input type="text" placeholder="Search Pokemon"onChange={handleSubmit} onSubmit={submit}/>
      </form>
      <div className="buttons">
        <button><Link to={`/${search.toLowerCase()}`}>Search</Link></button>
        <button><Link className="link"to="/random">Random</Link></button>
      </div>
    </div>
  )
}

export default Form