// npm modules
import { Link } from 'react-router-dom'

//pages


//css
import styles from './RecipeList.module.css'

const RecipeList = (props) => {
  return ( 
    <main className={styles.container}>
      <h1>Daily Recipes</h1>
      <form 
      onSubmit={props.handleSubmit} 
      autoComplete="off" 
      className={styles.form}
      >
      <label htmlFor="meal-type" className={styles.label}>Meal
        <select
          required
          value={props.formData.mealType}
          name="mealType"
          id="meal-type"
          onChange={props.handleChange}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
        </select>
        </label>
        <div>
          <button className={styles.button} type='submit'>
            Get Recipes
          </button>
        </div>
      </form>
    <Link>
      <div className='recipe-results'>
        <ul>
        {props.recipeResults.map(result => 
          <li key={result.recipe.uri}>
            {result.recipe.label}
          </li>
        )}
        </ul>
      </div>
    </Link>
    </main>
  )
}

export default RecipeList