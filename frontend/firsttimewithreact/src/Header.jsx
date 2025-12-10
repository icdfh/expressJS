import './App.css'
import Login from './Login'


function Header() {
 
  return (
    <>
    <div className='header'>
         <div className='logo'>
        <img 
        src="" 
        alt="logo" />
    </div>
    <div className='links'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
    </div>
    <div className='button'>
        <Login/>
    </div>
    </div>
   
    </>
  )
}

export default Header
