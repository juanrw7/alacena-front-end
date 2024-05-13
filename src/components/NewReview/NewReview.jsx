//css
import styles from './NewReview.module.css'

const NewReview = (props) => {
  return ( 
    <>
    
    <form autoComplete="off" className={styles.form} onSubmit={props.handleSubmit}>
    <h1>New Review</h1>
          <textarea
            required
            value={FormData.comment}
            name="comment"
            placeholder="Type your Review here.."
            
          />
        <label className={styles.label}>
          Rating (1-5)
          <input
            type="Number"
            value={FormData.rating}
            name="rating"
            min="0"
            max="5"
            
          />
        </label>
        <div>
          <button 
            className={styles.button}>
            Add Review
          </button>
        </div>
      </form>
    </>
  ) 
}

export default NewReview