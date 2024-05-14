// components
import ReviewCard from '../ReviewCard/ReviewCard'


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
          <ReviewCard key={review._id}
          review={review}
          user={props.user}
          details={props.details}
          recipeId={props.recipe._id}
          />
        )}
      </ul>
    </>
  )
}

export default Reviews