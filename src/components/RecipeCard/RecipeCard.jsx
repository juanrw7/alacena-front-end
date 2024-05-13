<<<<<<< HEAD
//css
import styles from './RecipeCard.module.css'

const RecipeCard = () => {
  return ( 
    <div className={styles.container}>
    <header>
      <span>
        <h1>Recipe Card</h1>      
      </span>      
    </header>
      <article>
        <p></p>
      </article>
    </div> 
  )
}

export default RecipeCard 
=======
//npm modules
import { NavLink } from "react-router-dom";

// css
import styles from './RecipeCard.module.css'

const RecipeCard = (props) => {
  return ( 
    <>
      <NavLink
      to={`/recipes/${props.result.recipe.uri}`}
      state={props}
      >
        <div className={styles.container}>
          <h2>{props.result.recipe.label}</h2>

        </div>
      </NavLink>
    </>
  )
}

export default RecipeCard;
>>>>>>> caf5f0c2f4d01a6a228a6c64b155e551b3f2313b
