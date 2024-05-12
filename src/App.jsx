// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import RecipeList from './pages/RecipeList/RecipeList'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as recipeService from './services/recipeService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())

  const [formData, setFormData] = useState({
    mealType: ''
  })

  const [recipeResults, setRecipeResults] = useState([])

  const navigate = useNavigate()
  
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }
  
  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      console.log(evt)
      const results = await recipeService.index(formData)
      console.log(results)
      setRecipeResults(results)
    } catch (err) {
      console.log(err)
    }
  }
  
  // useEffect(() =>{
  //   const fetchRecipeList = async () => {
  //     const recipeData = await recipeService.index()
  //     setFormData(recipeData)
  //   }
  //   if (user) fetchRecipeList()
  // }, [user])

  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route path='/recipes' element={
          <ProtectedRoute user={user}>
            <RecipeList 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            recipeResults={recipeResults}
            formData={formData}
            />
          </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  )
}

export default App
