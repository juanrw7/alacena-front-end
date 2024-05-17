// components
import ReviewCard from '../ReviewCard/ReviewCard'

//css
import styles from './Reviews.module.css'

const Reviews = (props) => {
  
  if (!props.recipe.reviews) return <h1>No reviews yet...</h1>

  return ( 
    <>
      <div className={styles.scroll}>
        {props.recipe.reviews.map(review => 
          <ReviewCard key={review._id}
          review={review}
          user={props.user}
          details={props.details}
          recipeId={props.recipe._id}
          handleDeleteReview={props.handleDeleteReview}
          />
        )}
      </div>
    </>
  )
}

export default Reviews