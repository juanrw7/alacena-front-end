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
    console.log(evt)
    console.log(recipeData)
    evt.preventDefault()
    try {
      const newRecipe = await recipeService.create(recipeData, reviewData)
      console.log(newRecipe)
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

  console.log(state.recipe)

  useEffect(() =>{
    const fetchRecipeData = async () => {
      const recipeDetails = await recipeService.recipeDetails(state.recipe)
      console.log(recipeDetails)
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
  
  console.log(recipeData)

  console.log(state)
  return (
    <>
    <main className={styles.main}>

    <div className={styles.container}>
      
      <div className={styles.image}>
        <h1>{state.recipe.label}</h1>
        <img src={state.recipe.image} alt="" />
        
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
          <p>&nbsp;&nbsp;{ingredient.text}</p>
          
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
        
        <div className={styles.newReview}>
            <NewReview 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            reviewData={reviewData}
            />
        </div>
        </div> 
        <Link to='/recipes'>
        <button className={styles.button}>
          Back
          </button>
      </Link> 
    </main>
  </>
  )
}

export default RecipeDetails