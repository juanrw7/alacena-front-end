//npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './ReviewCard.module.css'

const ReviewCard = (props) => {
  console.log(props.user.profile)
  console.log(props.review.author)
  const recipeInfo = [props.details, props.review]
  console.log(recipeInfo)
  return (  
    <>
      <div className={styles.container}>

        <h4>{props.review.comment} {props.review.rating>1? <h4> {props.review.rating} Stars</h4> : <h4> {props.review.rating} Star</h4> }</h4>

        {props.review.author._id === props.user.profile &&
            <>
            <NavLink 
            to={`/recipes/${props.recipeId}/reviews/edit`}
            state={recipeInfo}
            >
            <button>📝</button>
            </NavLink>
            
              <button onClick={() => props.handleDeleteReview(props.recipeId, props.review._id)}>
                🗑
              </button>
            
            </>
          }
      
      </div>
    </>
  )
}

export default ReviewCard