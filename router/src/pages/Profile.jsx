import { useNavigate } from "react-router-dom";


function Profile(){
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))

    function logout(){
        localStorage.removeItem("user")
        navigate("/login")
    }

  return(
    <>
        <h2>Профиль</h2>
        <p>Имя пользователя: {user.name}</p>
        <button onClick={logout}>Выйти</button>
    </>
  )
}
export default Profile;