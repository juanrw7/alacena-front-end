// css 
import styles from "./IngredientSearchList.module.css"

import RecipeCard from "../../components/RecipeCard/RecipeCard";

const IngredientSearchList = (props) => {
  return (  
    <main className={styles.main}>
      <h1>Recipes Based on your Search</h1>

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