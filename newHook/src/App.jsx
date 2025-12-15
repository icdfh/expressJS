import { useState } from 'react'
import './App.css'

function App() {
  // Вариант который больше не работает
  // let count = 0

  // const plus = () =>{
  //   count++;
  //   console.log("count:", count)
  // // }

  // Кнопка Показать/Скрыть (boolean state)
  // Счетчик с шагом

  // const [count, setCount] = useState(0)
  // const [name, setName] = useState("")
  // const [text,setText] = useState("")
  // const [todos, setTodos] = useState([])
  // const [isVisible, setIsVisible] = useState(false)
  // const [qty, setQty] = useState(1)

  // const inc = () => setQty(qty + 1)
  // const dec = () => {
  //   if (qty > 1) setQty(qty - 1)
  // }
    


  // const addTodo = () => {
  //   const trimmed = text.trim()
  //   if(!trimmed) return

  //   const newTodo = {
  //     id: Date.now(),
  //     text: trimmed,
  //     done: false
  //   }
  //   setTodos([...todos, newTodo]);
  //   setText("")

  // }

  // const plus = () => setCount(count + 1)
  // const minus = () => setCount(count - 1)


  // Примеры: 

  

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [isSaved, setIsSaved] = useState(false)
  const [form,setForm] = useState({
    email: "",
    password: ""
  })
  const [accepted, setAccepted] = useState(false)
  const [category, setCategory] = useState("all")
  const [likes, setLikes] = useState(0)
  const [liked, setLiked] = useState(false)


  const save = () =>{
    setIsSaved(true)
  }

  const toggleLike = () =>{
    if(liked){
      setLikes(likes - 1)
    }
    else{
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }



  return (
    <>
    {/* Пример */}
    <input 
      placeholder='Name'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      placeholder='Age'
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
    <button onClick={save}>Сохранить</button>
    {isSaved && <p>Данные сохранены</p>}


    <div>
      <input 
      placeholder='Email'
      value={form.email}
      onChange={(e) => setForm({...form, email: e.target.value})}
      />
      <input
      placeholder='Password'
      value={form.password}
      onChange={(e) => setForm({...form, password: e.target.value})}
      />
    </div>
    <pre>{JSON.stringify(form,null,2)}</pre>

    <div>
      <label htmlFor="qwerty">
        <input
        type='checkbox'
        checked = {accepted}
        onChange={() => setAccepted(!accepted)}

        Я согласен
        />
      </label>
      <button disabled = {!accepted}>Продолжить</button>
    </div>

    <div>
      <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}>
        <option value="all">Все</option>
        <option value="books">Книги</option>
        <option value="games">Игры</option>

      </select>
      <p>Выбрана категория: {category}</p>
    </div>

    <div>
      <button onClick={toggleLike}>
        {liked ? "❤": "🤍"} {likes}
      </button>
    </div>

    {/* Вариант который больше не работает */}
      {/* <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={plus}>+</button>
      </div> */}
      {/* Это счетчик */}
      {/* <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button> */}

      {/* Это манипуляция с input */}
      {/* <div className='input'>
        <div>
             <input 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        placeholder='Введите имя'
        />
        <p>Привет, {name || "гость"}</p>
      </div>

        <div className='todo'>
        <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Новая задача'
        />
        <button onClick={addTodo}>+</button>
        </div>
       
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        </div>

        <div>
            <button onClick={() =>{
              setIsVisible(!isVisible)
            }}>{isVisible ? "Скрыть": "Показать"}</button>
            
            {isVisible && <p>Это скрытый текст</p>}
        </div>

        <div className='Counter with step'>
            <button onClick={dec}>-</button>
            <span>{qty}</span>
            <button onClick={inc}>+</button>
        </div>
        <input type="color" /> */}
    </>
  )
}

export default App
