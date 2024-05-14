//css
import styles from './NewReview.module.css'

const NewReview = (props) => {
  return ( 
    <>
    
    <form autoComplete="off" className={styles.form} onSubmit={props.handleSubmit}>
    <h1>New Review</h1>
          <textarea
            required
            value={props.reviewData.comment}
            name="comment"
            placeholder="Type your Review here.."
            onChange={props.handleChange}
          />
        <label className={styles.label}>
          Rating (1-5)
          <input
            type="Number"
            value={props.reviewData.rating}
            name="rating"
            min="0"
            max="5"
            onChange={props.handleChange}
          />
        </label>
        <div>
          <button type='submit'
            className={styles.button}>
            Add Review
          </button>
        </div>
      </form>
    </>
  ) 
}

export default NewReview