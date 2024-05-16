// npm modules
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

// services
import * as profileService from '../../services/profileService'

// assets
import logo from "../../assets/images/logo2.png"

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  // const [profiles, setProfiles] = useState([])

  // useEffect(() => {
  //   const fetchProfiles = async () => {
  //     const profileData = await profileService.getAllProfiles()
  //     setProfiles(profileData)
  //   }
  //   fetchProfiles()
  // }, [])

  // const currentProfile = profiles.filter((profile)=> profile.name === user.name)
  
  // if (profiles.length) {
  //   console.log(profiles.filter((profile)=> profile.name === user.name))
  // }
  
  // console.log(currentProfile)

  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login">LOG IN</NavLink></li>
      <li><NavLink to="/auth/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to='/recipes'>Daily Recipes</NavLink></li>
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="/search">Recipe Search</NavLink></li>
      <li>
        <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
      </li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to="/recipes">
        <img src={logo} className={styles.logo} alt="chef hat" />
      </NavLink>
      {/* <NavLink to="/"> */}
        {/* <h1>{currentProfile[0].name}</h1> */}
        {/* {currentProfile && <img src={currentProfile[0].photo} className={styles.profileImg} alt="" />}
        </NavLink> */}
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
