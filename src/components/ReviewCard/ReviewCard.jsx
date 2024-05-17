//npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './ReviewCard.module.css'

//icon
import starIcon from '../../assets/icons/star-icon.png'
import trashIcon from '../../assets/icons/trash.svg'
import editIcon from '../../assets/icons/compose.svg'

const ReviewCard = (props) => {
  const recipeInfo = [props.details, props.review]
  return (  
    <>
      <div className={styles.container}>
        <div className={styles.reviewCard}>
          <div className={styles.comment}>
            {props.review.comment}
        </div>
        <div className={styles.author}>
          <div className={styles.rating}>
        <span>Rating:</span>{props.review.rating > 1? <p> {props.review.rating}  Stars</p> : <p> {props.review.rating} Star</p> }
        <img id="star" src={starIcon} alt="star rating" />
        </div>
        <div className={styles.photo}>
          <img src={props.review.author.photo} alt="" />
          {props.review.author.name}
          <br />
          <span className={styles.posted}>
          Posted: &nbsp;
          {(new Date(props.review.author.createdAt).toLocaleString('en-US', {month: 'numeric', day: 'numeric', year: '2-digit'}))}
          </span>
        </div>
          
        </div>
        </div> 
        <div className={styles.button}>
        {props.review.author._id === props.user.profile &&
            <>
            <button>
            <NavLink 
            to={`/recipes/${props.recipeId}/reviews/edit`}
            state={recipeInfo}
            >
              <img src={editIcon} alt="edit Icon" />
              
            </NavLink>
            </button>
            
              <button  onClick={() => props.handleDeleteReview(props.recipeId, props.review._id)}>
                <img src={trashIcon} alt="trash Icon"/>
              </button>
            </>
          }
          </div>
      </div>
    </>
  )
}

export default ReviewCard