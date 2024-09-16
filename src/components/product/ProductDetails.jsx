import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleProduct } from '../../api/functions/getSingleProduct'
import { useFetchApi } from '../../hooks/custom/useFetchApi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../hooks/redux-toolkit/slice/cartSlice'
import { Button, Typography, Box, Card, CardMedia, CardContent, CardActions } from '@mui/material'

const ProductDetails = () => {
  const { id } = useParams()
  const { data: product, error, loading } = useFetchApi(getSingleProduct, id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography color="error">Error: {error.message}</Typography>
  if (!product) return <Typography>No product found</Typography>

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    navigate('/cart')
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="300"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary">
            Price: ${product.price}
          </Typography>
          <Typography variant="body2">
            Category: {product.category}
          </Typography>
          <Typography variant="body2">
            Brand: {product.brand}
          </Typography>
          <Typography variant="body2">
            Rating: {product.rating}/5
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="large" 
            variant="contained" 
            color="primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default ProductDetails