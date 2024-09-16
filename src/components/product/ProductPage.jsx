import React, { useState, useEffect } from 'react'
import { useFetchApi } from '../../hooks/custom/useFetchApi'
import { fetchAllProducts } from '../../api/functions/fetchAllProducts'
import { searchProducts } from '../../api/functions/searchProducts'
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Stack, Pagination } from '@mui/material'
import { addToCart } from '../../hooks/redux-toolkit/slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

const ProductPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { searchTerm } = useSelector((state) => state.cart)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const limit = 9

  const { data: products, error, loading, refetch } = useFetchApi(
    searchTerm ? searchProducts : fetchAllProducts,
    searchTerm,
    page,
    limit
  )

  useEffect(() => {
    if (products) {
      setTotalPages(Math.ceil(products.total / limit))
    }
  }, [products, limit])

  useEffect(() => {
    refetch()
  }, [page, searchTerm, refetch])

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <Box sx={{ mt: 8, mx: 2 }}>
      <Grid container spacing={3}>
        {products && products.products && products.products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component='img'
                alt={product.title}
                height='140'
                image={product.thumbnail}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h5' component='div'>
                  {product.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size='small'
                  onClick={() => {
                    dispatch(addToCart(product))
                    navigate('/cart')
                  }}
                >
                  Add to cart
                </Button>
                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  size='small'
                >
                  Product details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {totalPages > 1 && (
        <Stack spacing={2} sx={{ mt: 2 }} justifyContent='center' alignItems='center'>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handlePageChange} 
            variant='outlined' 
            shape='rounded' 
          />
        </Stack>
      )}
    </Box>
  )
}

export default ProductPage