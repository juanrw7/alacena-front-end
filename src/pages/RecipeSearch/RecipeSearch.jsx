
//components
import SearchForm from '../../components/SearchForm/SearchForm'

//css
import styles from './RecipeSearch.module.css'





const RecipeSearch = (props) => {
  console.log(props.searchFormData)
  return ( 
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Recipe Search</h1>
          <p>Please enter a minmum of 3 ingredients</p>
        </div>
        <div className={styles.search}>
          <SearchForm
          handleInputChange={props.handleInputChange}
          handleSearchSubmit={props.handleSearchSubmit}
          searchFormData={props.searchFormData}
          />
        </div>
      </div>
    </>
  )
}

export default RecipeSearch