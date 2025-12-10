import './App.css'
import Header from './Header'
import UserCard from './UserCard'

const skills = ["HTML", "CSS", "JS", "REACT"]

function App() {
 
const name = "Adil"
const isOnline = true

  return (
    <>
      <Header/>
      <UserCard
        name = "Adil"
        age = {19}
        avatar = "https://vincent.enthub.it/stories/images/73fe876a-5e26-4265-8edb-17e708416afe.webp"
        isOnline = {true}
      />
      
    
    </>
  )
}

export default App
