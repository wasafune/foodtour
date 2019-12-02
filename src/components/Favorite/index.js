import React, { useState, useContext, useEffect } from 'react'
import { Box, Button, Select, MenuItem, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { TourContext } from '../../contexts/TourContext'


export default function Favorite() {
  const classes = useStyles()
  const { savedTourCount, applyFavoriteTour, removeFavoriteTour } = useContext(TourContext)

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('tourFavorites') || '{}'))


  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('tourFavorites') || '{}'))
  }, [savedTourCount])

  const favoriteButtons = Object.keys(favorites).map((key, i) => (
    <Box className={classes.box} key={`${key}${i}`}>
      <MenuItem value={key} onClick={() => applyFavoriteTour(key)}>{key}</MenuItem>
      <Button className={classes.xButton} variant="contained" color="primary" value={key} onClick={() => removeFavoriteTour(key)}>
        X
      </Button>
    </Box>
  ))

  return (
    <Box>
      <InputLabel>Favorites</InputLabel>
      <Select className={classes.select} value="Favorites" label="Favorites">
        {favoriteButtons}
      </Select>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
  },
  select: {
    width: 150,
  },
  xButton: {
    width: 15,
  },
}))
