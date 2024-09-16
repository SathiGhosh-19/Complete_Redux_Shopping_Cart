import { axiosInstance } from '../axiosInstance/axiosInstance'
import { endPoints } from '../endPoints/endPoints'

export const getSingleProduct = async (id) => {
 console.log(id);
  try {
    const response = await axiosInstance.get(endPoints?.getProductDetails(id))
    console.log(response);
    return response.data
  } catch (error) {
    console.log(error)
  }
}
