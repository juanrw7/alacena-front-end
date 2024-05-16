// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/recipes`

async function index(mealType) {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`, 
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(mealType)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function create (recipeData, reviewData) {
  const formData = {recipeData: recipeData, reviewData:reviewData}
  try {
    const res = await fetch(`${BASE_URL}/new`, {
      method: "POST",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`, 
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function recipeDetails (recipeData) {
  try {
    const res = await fetch(`${BASE_URL}/recipedetails`, {
      method: "POST",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipeData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function updateReview (recipeId, formData) {
  try {
    const res = await fetch(`${BASE_URL}/${recipeId}/reviews`,{
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deleteReview (recipeId, reviewId) {
try {
  const res = await fetch (`${BASE_URL}/${recipeId}/reviews/${reviewId}`,{
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
})
  return res.json()
} catch (err) {
  console.log(err)
}
}

export {
  index,
  create,
  recipeDetails,
  updateReview,
  deleteReview,
}