// npm modules
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


      <div className='recipe-results'>
        <ul>
        {props.recipeResults.map((result,idx) => 

          <RecipeCard
          key={result.recipe.uri}
          result={result}
          />


        )}

        </ul>
      </div>
    </main>
  )
}

export default RecipeList