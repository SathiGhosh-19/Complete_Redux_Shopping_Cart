export const baseURL = 'https://dummyjson.com'

export const endPoints = {
  products: '/products',
  getProductDetails: (id) => `/products/${id}`,
  searchProducts: (query) => `/products/search?q=${query}`,
  pagination: (page, limit = 10, skip = 0) => `/products?limit=${limit}&skip=${skip}`
}