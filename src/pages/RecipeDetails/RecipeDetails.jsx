import { useLocation } from "react-router-dom"

//components
import Reviews from "../../components/Reviews/Reviews"
import NewReview from "../../components/NewReview/NewReview"

// css 
import styles from "./RecipeDetails.module.css"

const RecipeDetails= () => {
  const {state} = useLocation()
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
            <NewReview />
        </div>
    </div>
  </>
  )
}

export default RecipeDetails
