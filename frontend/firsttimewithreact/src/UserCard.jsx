import './App.css'

function UserCard(props) {
 
  return (
    <>
        <div className='card'>
            <img src={props.avatar} alt={props.name} width={80} />
            <h3>{props.name}</h3>
            <p>Возраст: {props.age}</p>
            <p>Статус: {props.isOnline ? 'Онлайн' : 'Оффлайн'}</p>
        </div>
    </>
  )
}

export default UserCard


