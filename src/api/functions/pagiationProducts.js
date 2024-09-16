import { axiosInstance } from '../axiosInstance/axiosInstance'
import { endPoints } from '../endPoints/endPoints'

export const paginationProducts = async (page) => {
  const response = await axiosInstance.get(endPoints.pagination(page))
  return response.data
}
