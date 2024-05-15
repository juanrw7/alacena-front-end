import logo from "../../assets/images/logo2.png"

// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (

    <div className={styles.container}>

      <div className={styles.imageContainer}>
      <h1>Welcome to Alacena {user ? `, ${user.name}` : ''}</h1>
        <img src={logo} className={styles.logo} alt="chef hat" />
      </div>
    </div>
  )
}

export default Landing
