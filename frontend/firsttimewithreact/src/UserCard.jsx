import './App.css'

function UserCard(props) {
 
  return (
    <>
        <div className='card'>
            <img src={props.avatar} alt={props.name} width={80} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button>{props.btn}</button>
        </div>
    </>
  )
}

export default UserCard


