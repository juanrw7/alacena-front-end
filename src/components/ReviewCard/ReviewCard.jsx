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
        <div className={styles.reviewCard}>
          <div className={styles.comment}>
            {props.review.comment}
        </div>
        <div className={styles.author}>
          <div className={styles.rating}>
        Recipe Rating:&nbsp;{props.review.rating > 1? <h4> {props.review.rating} Stars</h4> : <h4> {props.review.rating} Star</h4> }
        </div>
        <div className={styles.photo}>
          <img src={props.review.author.photo} alt="" />
          {props.review.author.name}
        </div>
          
        </div>
        </div> 
        <div className={styles.button}>
        {props.review.author._id === props.user.profile &&
            <>
            <NavLink 
            to={`/recipes/${props.recipeId}/reviews/edit`}
            state={recipeInfo}
            >
            <button>📝</button>
            </NavLink>
            
              <button>
                🗑
              </button>
            </>
          }
          </div>
      </div>
    </>
  )
}

export default ReviewCard