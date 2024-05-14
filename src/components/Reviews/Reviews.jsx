//css
import styles from './Reviews.module.css'

const Reviews = (props) => {
  console.log(props)
  
  if (!props.recipe.reviews) return <h1>No reviews yet...</h1>

  return ( 
    <>
      <h1>All Reviews</h1>
      <ul>
        {props.recipe.reviews.map(review => 
          <div 
          key={review._id}
          className={styles.review}
          >
            <p>-{review.comment}</p>&nbsp;&nbsp; {review.rating>1? <p> {review.rating} stars</p> : <p> {review.rating} star</p> }
          </div>
        )}
      </ul>
    </>
  )
}

export default Reviews