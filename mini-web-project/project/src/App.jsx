import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Login from "./pages/Login"
import Feed from "./pages/Feed"
import Shop from "./pages/Shop"
import ProductPages from "./pages/ProductPages"
import Profile from "./pages/Profile"

import ProtectedRoute from "./components/ProtectedRoute"
import Layout from "./components/Layout"

function App() {
  const [isAuth, setIsAuth] = useState(
    Boolean(localStorage.getItem("auth"))
  )

  function login() {
    localStorage.setItem("auth", "true")
    setIsAuth(true)
  }

  function logout() {
    localStorage.removeItem("auth")
    setIsAuth(false)
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuth ? <Navigate to="/feed" /> : <Login onLogin={login} />
        }
      />

      <Route
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Layout onLogout={logout} />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductPages />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App
