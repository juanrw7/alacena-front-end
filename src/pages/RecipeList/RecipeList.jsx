// npm modules
import { Link } from 'react-router-dom'

//pages

import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

// component
import RecipeCard from '../../components/RecipeCard/RecipeCard'

//css
import styles from './RecipeList.module.css'

const RecipeList = (props) => {
  return ( 
    <main className={styles.container}>
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
        <div className="recipe-button">
          <button className={styles.button} type='submit'>
            Get Recipes
          </button>
        </div>
      </form>
    <Link>
    <div className={styles.recipeCard}>

        {props.recipeResults.map((result) => 

          <RecipeCard
          key={result.recipe.uri}
          result={result}
          />
        )}

      </div>
    </Link>
    </main>
  )
}

export default RecipeList