// css
import styles from './ReviewCard.module.css'

const ReviewCard = (props) => {
  console.log(props.user.profile)
  console.log(props.review.author)
  return (  
    <>
      <div className={styles.container}>

        <h4>{props.review.comment} {props.review.rating>1? <h4> {props.review.rating} Stars</h4> : <h4> {props.review.rating} Star</h4> }</h4>

        {props.review.author._id === props.user.profile &&
            <>
              <button>
                delete
              </button>
            </>
          }
      
      </div>
    </>
  )
}

export default ReviewCard