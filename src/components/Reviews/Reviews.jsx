// components
import ReviewCard from '../ReviewCard/ReviewCard'




const Reviews = (props) => {
  console.log(props)
  
  if (!props.recipe.reviews) return <h1>No reviews yet...</h1>

  return ( 
    <>
    <div>
      <ul>
        {props.recipe.reviews.map(review => 
          <ReviewCard key={review._id}
          review={review}
          user={props.user}
          details={props.details}
          recipeId={props.recipe._id}
          handleDeleteReview={props.handleDeleteReview}
          />
        )}
      </ul>
    </div>
    </>
  )
}

export default Reviews