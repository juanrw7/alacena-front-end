//npm modules
import { NavLink } from "react-router-dom"

// css
import styles from './RecipeCard.module.css'

const RecipeCard = (props) => {
  
  return ( 
    <>
      <NavLink
      to={`/recipes/details`}
      state={props.result}
      >
        <div className={styles.container}>
          <h2>{props.result.recipe.label}</h2>
        </div>
      </NavLink>
    </>
  )
}

export default RecipeCard
