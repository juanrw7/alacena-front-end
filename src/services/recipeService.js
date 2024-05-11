// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/recipes`

async function index(recipeQuery) {
  try {
    const res = await fetch(`${BASE_URL}`, {
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`, 
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(recipeQuery)
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}


export {
  index,
  
}