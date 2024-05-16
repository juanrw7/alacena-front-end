//npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './ReviewCard.module.css'

//icon
import starIcon from '../../assets/icons/star-icon.png'
import trashIcon from '../../assets/icons/trash.svg'
import editIcon from '../../assets/icons/compose.svg'

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
        Recipe Rating:&nbsp;{props.review.rating > 1? <h4> {props.review.rating}  Stars</h4> : <h4> {props.review.rating} Stars</h4> }
        <img id="star" src={starIcon} alt="star rating" />
        </div>
        <div className={styles.photo}>
          <img src={props.review.author.photo} alt="" />
          {props.review.author.name}
          <br />
          Posted: &nbsp;
          {(new Date(props.review.author.createdAt).toLocaleString('en-US', {month: 'numeric', day: 'numeric', year: '2-digit'}))}
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
            <button><img src={editIcon} alt="" /></button>
            </NavLink>
            
              <button>
                <img src={trashIcon} alt="" />
              </button>
            </>
          }
          </div>
      </div>
    </>
  )
}

export default ReviewCard