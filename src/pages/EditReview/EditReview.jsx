//npm modules
import { useLocation, useParams, useNavigate } from "react-router-dom"
import { useState } from "react"


//css
import styles from './EditReview.module.css'

//services
import * as recipeService from '../../services/recipeService'

const EditReview = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { recipeId } = useParams()
  const [formData, setFormData] = useState(state[1])

  console.log(recipeId)
  const recipe = {recipe:state[0]}

  const [currentRecipe, setCurrentRecipe] = useState(recipe)

  
  // setCurrentRecipe(recipe)



  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await recipeService.updateReview(recipeId, formData)
    navigate('/recipes/details', { state: currentRecipe })
  }

  return ( 
    <>
      <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
    <h1>Edit Review</h1>
          <textarea
            required
            value={formData.comment}
            name="comment"
            placeholder="Type your Review here.."
            onChange={handleChange}
          />
        <label className={styles.label}>
          Rating (1-5)
          <input
            type="Number"
            value={formData.rating}
            name="rating"
            min="0"
            max="5"
            onChange={handleChange}
          />
        </label>
        <div>
          <button type='submit'
            className={styles.button}>
            Update Review
          </button>
        </div>
      </form>
    </>
  )
}

export default EditReview