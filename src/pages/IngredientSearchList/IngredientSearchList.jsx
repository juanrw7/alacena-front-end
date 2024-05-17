// css 
import styles from "./IngredientSearchList.module.css"

// components
import RecipeCard from "../../components/RecipeCard/RecipeCard";

//
import { useNavigate } from "react-router-dom";

const IngredientSearchList = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/ingredientSearch")
  }

  return (  
    <main className={styles.main}>

      <div>
        {props.recipeSearchResults.length? <h1>Recipes Based on your Search</h1> : <h1>Oops, No Recipes Matched Query</h1>}
      </div>

        {!props.recipeSearchResults.length 
        && 
        <button className={styles.conditionalButton} onClick={handleClick}>
          Try Again?
        </button>
        }
      <div className={styles.recipeCard}>
        {props.recipeSearchResults.map((result) => 
          <RecipeCard
          key={result.recipe.uri}
          result={result}
          />
        )}
      </div>
      
    </main>
  )
}

export default IngredientSearchList;