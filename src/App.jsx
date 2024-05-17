// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
// import Profiles from './pages/Profiles/Profiles'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import RecipeList from './pages/RecipeList/RecipeList'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'
import EditReview from './pages/EditReview/EditReview'
import RecipeSearch from './pages/RecipeSearch/RecipeSearch'
import IngredientSearchList from './pages/IngredientSearchList/IngredientSearchList'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as recipeService from './services/recipeService'

// styles
import './App.css'

const initialFormValues = {
  ingredient1:'', ingredient2:'', ingredient3:'', ingredient4:'',ingredient5:'', ingredient6:'', ingredient7:'', ingredient8:'', ingredient9:'', ingredient10:''
}

function App() {
  const [user, setUser] = useState(authService.getUser())

  const [formData, setFormData] = useState({
    mealType: 'dinner'
  })


  const [recipeResults, setRecipeResults] = useState([])

  const [searchFormData, setSearchFormData] = useState(initialFormValues)
  const [recipeSearchResults, setRecipeSearchResults] = useState([])

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
      const results = await recipeService.index(formData)
      setRecipeResults(results)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSearchSubmit = async evt => {
    evt.preventDefault()
    try {
      const searchResults = await recipeService.search(searchFormData)
      setRecipeSearchResults(searchResults)
      navigate("/ingredientSearch/allResults")
  } catch (err) {
    console.log(err)
  }
    }
  
  const handleInputChange = (evt) => {
    const {name, value} = evt.target
    setSearchFormData({...searchFormData, [name]: value, })
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        {/* This Route will later be used to show the recipes that each user has saved */}
        {/* <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        /> */}
        {/* This */}
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
        <Route path='/recipes/details' element={
          <ProtectedRoute user={user}>
            <RecipeDetails user={user}/>
          </ProtectedRoute>
          } 
        />
        <Route path='/recipes/:recipeId/reviews/edit' element={
          <ProtectedRoute user={user}>
            <EditReview user={user}/>
          </ProtectedRoute>
          }
        />
        <Route path='/ingredientSearch' element={
          <ProtectedRoute user={user}>
            <RecipeSearch user={user}
            handleInputChange={handleInputChange}
            handleSearchSubmit={handleSearchSubmit}
            searchFormData={searchFormData}
            />
          </ProtectedRoute>
        } />
        <Route path='/ingredientSearch/allResults' element={
          <ProtectedRoute user={user}>
            <IngredientSearchList user={user}
            recipeSearchResults={recipeSearchResults}
            />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
