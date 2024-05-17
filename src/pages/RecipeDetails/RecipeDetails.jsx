// npm modules
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//components
import Reviews from "../../components/Reviews/Reviews"
import NewReview from "../../components/NewReview/NewReview"

// services
import * as recipeService from '../../services/recipeService'

// css 
import styles from "./RecipeDetails.module.css"


const RecipeDetails= (props) => {
  const {state} = useLocation()
  const [recipeData, setRecipeData] = useState(state.recipe)
  const [reviewData, setReviewData] = useState({
    comment: '',
    rating: ''
  })

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const newRecipe = await recipeService.create(recipeData, reviewData)
      setRecipeData(newRecipe)
      setReviewData({
        comment: '',
        rating: ''
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (evt) => {
    setReviewData({...reviewData, [evt.target.name]: evt.target.value })
  }

  useEffect(() =>{
    const fetchRecipeData = async () => {
      const recipeDetails = await recipeService.recipeDetails(state.recipe)
    if (recipeDetails) setRecipeData(recipeDetails)
    }
    fetchRecipeData()
  }, [state.recipe])

  const handleDeleteReview = async (recipeId, reviewId) => {
    await recipeService.deleteReview(recipeId, reviewId)
    setRecipeData({
      ...recipeData,
      reviews: recipeData.reviews.filter( review => review._id !== reviewId)
    })
  }
  

  return (
    <>
    <main className={styles.main}>
    <div className={styles.container}>
      <h1>{state.recipe.label}</h1>
      <div className={styles.recipeHeader}>
        <div className={styles.image}>
          <img src={state.recipe.image} alt="recipe Image" />
        </div>
        <div className={styles.recipeInfo}>
          {state.recipe.totalTime>0 && <h2>- Cooking time: {state.recipe.totalTime}min</h2>}
          <h2>- Serves: {state.recipe.yield}</h2>
          <h2>- {state.recipe.cuisineType[0].charAt(0).toUpperCase()+ state.recipe.cuisineType[0].slice(1)} cuisine</h2>
          <h2>- Total calories: {Math.round(state.recipe.calories)}</h2>
          <h2>- Calories per serving: {Math.round(state.recipe.calories / state.recipe.yield)}</h2>
        </div>
      </div>
      <div className={styles.instructions}>
        <a href={state.recipe.url} target="_blank">View Recipe Instructions</a>
      </div>
      <div className={styles.title}>
        Ingredients
      </div>
      <div className={styles.ingredients}>
        {state.recipe.ingredients.map(ingredient =>
        <div 
        key={ingredient.foodId}
        className={styles.ingredient}
        >
          <h3>{ingredient.food.charAt(0).toUpperCase()+ ingredient.food.slice(1)}</h3> 
          <p>{ingredient.text}</p>
        </div>
        )}
      </div>
    </div> 
        <div className={styles.review}>
          <h1> Reviews</h1>
            <Reviews 
            recipe={recipeData}
            user={props.user}
            details={state.recipe}
            handleDeleteReview={handleDeleteReview}
            />
        </div> 
        <div className={styles.newReview}>
            <NewReview 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            reviewData={reviewData}
            />
        </div>
        <Link to='/search'>
          <button className={styles.backButton}>
              Back
          </button>
        </Link> 
    </main>
  </>
  )
}

export default RecipeDetails