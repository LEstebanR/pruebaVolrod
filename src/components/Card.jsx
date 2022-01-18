import '../assets/styles/Card.css'

const Card = ({name, photo}) => {
  return (
    <div className="card">
      <img className="photo" src={photo} alt="pokemon"/>
      <h1>{name}</h1>
    </div>
  )
}
export default Card;