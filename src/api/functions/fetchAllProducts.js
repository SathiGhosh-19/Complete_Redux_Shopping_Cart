import { axiosInstance } from '../axiosInstance/axiosInstance'
import { endPoints } from '../endPoints/endPoints'

export const fetchAllProducts = async (_, limit = 10, skip = 0) => {
  try {
    const response = await axiosInstance.get(endPoints.pagination(skip / limit + 1, limit, skip))
    return response.data
  } catch (error) {
    console.error(error)
    throw error // Re-throw the error so it can be caught in the useFetchApi hook
  }
}