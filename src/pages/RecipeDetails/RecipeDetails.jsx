// npm modules
import { useLocation } from "react-router-dom"
import { useState } from "react"

//components
import Reviews from "../../components/Reviews/Reviews"
import NewReview from "../../components/NewReview/NewReview"

// services
import * as recipeService from '../../services/recipeService'

// css 
import styles from "./RecipeDetails.module.css"


const RecipeDetails= () => {
  const {state} = useLocation()
  

  const [recipeData, setRecipeData] = useState(state.recipe)

  const handleSubmit = async evt => {
    console.log(evt)
    console.log(recipeData)
    evt.preventDefault()
    try {
      const newRecipe = await recipeService.create(recipeData)
      console.log(newRecipe)
      setRecipeData(newRecipe)
    } catch (err) {
      console.log(err)
    }
  }
  
  console.log(recipeData)

  console.log(state)
  return (
    <>
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={state.recipe.image} alt="" />
        <h1>{state.recipe.label}</h1>
      </div>


      <div className={styles.ingredients}>
        {state.recipe.ingredients.map(ingredient =>
        <div 
        key={ingredient.foodId}
        className={styles.ingredient}
        >

          <h3>{ingredient.food.charAt(0).toUpperCase()+ ingredient.food.slice(1)}</h3> 
          <p>-&nbsp;&nbsp;{ingredient.text}</p>

        </div>
        )}
      </div>
        <div className={styles.review}>
          <h1> Reviews</h1>
            <Reviews />
        </div>
        <div className={styles.newReview}>
            <NewReview handleSubmit={handleSubmit}/>
        </div>
    </div>
  </>
  )
}

export default RecipeDetails
