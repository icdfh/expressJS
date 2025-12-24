import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Layout from "./components/Layout"
import PrivateRoute from "./components/PrivateRoute"
import NotFound from "./pages/NotFound"

function App(){
  return(
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>

        <Route path="*" element={<NotFound/>}/>

        <Route path="/profile" element= {
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }>
          
        </Route>
      </Route>
    </Routes>
    
  )
}
export default App;