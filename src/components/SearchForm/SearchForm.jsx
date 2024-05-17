
import styles from './SearchForm.module.css'

const SearchForm = (props) => {
console.log(props.searchFormData)
  return ( 
    <>
    <div className={styles.container}>
      <form onSubmit={props.handleSearchSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
        required
          type="text" 
          name="ingredient1"
        
          onChange={props.handleInputChange} 
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
      
          type="text" 
          name="ingredient2" 
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
        
          type="text" 
          name="ingredient3" 
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient4" 
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient5" 
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient6" 
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient7" 
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient8" 
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient9" 
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient10"
          onChange={props.handleInputChange} 
        />
        </label>
        <button className={styles.button} type="submit">Search</button>
      </form>
    </div>
    </>
  )
}

export default SearchForm 