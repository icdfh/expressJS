import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (username.trim() === ""){
            alert("Введите имя")
            return
        }

        const user = {name: username}
        localStorage.setItem("user", JSON.stringify(user))

        navigate("/profile")
    }

  return(
    <>
       <h2>Login</h2>

       <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Ваше имя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        
            <button type="submit">Войти</button>

       </form>
    </>
  )
}
export default Login;