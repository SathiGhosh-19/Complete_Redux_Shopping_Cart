import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchTerm } from '../../hooks/redux-toolkit/slice/cartSlice'

const Header = () => {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state) => state.cart)
  
  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value))
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Shopping Cart
        </Typography>
        <TextField
          variant='outlined'
          size='small'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearch}
          sx={{ mr: 2, backgroundColor: 'white', borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button color='inherit' component={Link} to='/' sx={{ mr: 2 }}>
          Home
        </Button>
        <IconButton color='inherit' component={Link} to='/cart' sx={{ mr: 2 }}>
          <Badge badgeContent={0} color='error'>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header