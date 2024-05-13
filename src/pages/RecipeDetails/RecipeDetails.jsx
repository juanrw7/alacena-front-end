import { useLocation } from "react-router-dom"

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

    </div>
  </>
  )
}

export default RecipeDetails
