import './App.css'
import Header from './Header'
import UserCard from './UserCard'
import Footer from './Footer'




function App() {
 


  return (
    <>

      <div className='container'>
          <div className='head'>
              <Header/>
          </div>
          <div className='main'>
                <UserCard
                  avatar = ""
                  title = "This is title for card"
                  description = "This is description for card"
                  btn = "More"
                />
                   <UserCard
                  avatar = ""
                  title = "This is title for card"
                  description = "This is description for card"
                  btn = "More"
                />
                   <UserCard
                  avatar = ""
                  title = "This is title for card"
                  description = "This is description for card"
                  btn = "More"
                />
                   <UserCard
                  avatar = ""
                  title = "This is title for card"
                  description = "This is description for card"
                  btn = "More"
                />
                   <UserCard
                  avatar = ""
                  title = "This is title for card"
                  description = "This is description for card"
                  btn = "More"
                />
                   <UserCard
                  avatar = ""
                  title = "This is title for card"
                  description = "This is description for card"
                  btn = "More"
                />
          </div>
          <div className='footer'>
            <Footer/>
          </div>
      </div>
    
    </>
  )
}

export default App
