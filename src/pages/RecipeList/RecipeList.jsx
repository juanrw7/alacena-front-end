// npm modules

//css
import styles from './RecipeList.module.css'

const RecipeList = (props) => {
  return ( 
    <main className={styles.container}>
      <h1>Daily Recipes</h1>
      <form onSubmit={props.handleSubmit} autoComplete="off"  className={styles.form}>
        <label htmlFor="cuisine-type" className={styles.label}>
        Cuisine
        <select
          required
          type="text"
          value={props.formData.cuisineType}
          name="cuisineType"
          id="cuisine-type"
          onChange={props.handleChange}
            >
              <option value='American'>American</option>
              <option value='Asian'>Asian</option>
              <option value='British'>British</option>
              <option value='Carribbean'>Carribbean</option>
              <option value='Central Europe'>Central Europe</option>
              <option value='Chinese'>Chinese</option>
              <option value='Eastern Europe'>Eastern Europe</option>
              <option value='French'>French</option>
              <option value='Indian'>Indian</option>
              <option value='Italian'>Italian</option>
              <option value='Japanese'>Japanese</option>
              <option value='Kosher'>Kosher</option>
              <option value='Mediterranean'>Mediterranean</option>
              <option value='Mexican'>Mexican</option>
              <option value='Middle Eastern'>Middle Eastern</option>
              <option value='Nordic'>Nordic</option>
              <option value='South American'>South American</option>
              <option value='South East Asian'>South East Asian</option>
          </select>
        </label>
        <label htmlFor="meal-type" className={styles.label}>Meal
        <select
          required
          type="text"
          value={props.formData.mealType}
          name="mealType"
          id="meal-type"
          onChange={props.handleChange}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
        </select>
        </label>
        <div>
          <button className={styles.button} type='submit'>
            Get Recipes
          </button>
        </div>
      </form>
    </main>
  )
}

export default RecipeList