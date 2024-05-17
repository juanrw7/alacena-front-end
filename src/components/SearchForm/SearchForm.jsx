//css
import styles from './SearchForm.module.css'

const SearchForm = (props) => {

  return ( 
    <div className={styles.container}>
      <form onSubmit={props.handleSearchSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
        required
          type="text" 
          name="ingredient1"
          placeholder='required...'
          onChange={props.handleInputChange} 
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient2" 
          placeholder='optional...'
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient3" 
          placeholder='optional...'
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient4" 
          placeholder='optional...'
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient5" 
          placeholder='optional...'
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient6" 
          placeholder='optional...'
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient7"
          placeholder='optional...' 
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient8" 
          placeholder='optional...'
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient9" 
          placeholder='optional...'
          onChange={props.handleInputChange}
        />
        </label>
        <label className={styles.label}>
          Ingredient: &nbsp;
        <input 
          type="text" 
          name="ingredient10"
          placeholder='optional...'
          onChange={props.handleInputChange} 
        />
        </label>
        <button className={styles.button} type="submit">
          {!props.isSubmitted ? 'Search' : 'Getting your recipes...'}
        </button>
      </form>
    </div>
  )
}

export default SearchForm 