import { axiosInstance } from '../axiosInstance/axiosInstance'
import { endPoints } from '../endPoints/endPoints'

export const searchProducts = async (query, limit = 10, skip = 0) => {
  try {
    const response = await axiosInstance.get(endPoints.searchProducts(query), {
      params: {
        limit,
        skip
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error // Re-throw the error so it can be caught in the useFetchApi hook
  }
}