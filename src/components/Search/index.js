import React, { useState, useContext, useEffect } from 'react'
import { Box, TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { TourContext } from '../../contexts/TourContext'
import Favorite from '../Favorite'


export default function SearchForm(props) {
  const classes = useStyles()

  const { tourInput, updateTour } = useContext(TourContext)
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')
  const [range, setRange] = useState(10)
  const [limit, setLimit] = useState(5)
  const [sortBy, setSortBy] = useState('rating')

  const handleSubmit = (event) => {
    event.preventDefault()
    updateTour(term, location, range, limit, sortBy)
  }

  useEffect(() => {
    if (tourInput.term) {
      setTerm(tourInput.term)
      setLocation(tourInput.location)
      setRange(tourInput.range)
      setLimit(tourInput.limit)
      setSortBy(tourInput.sortBy)
    }
  }, [tourInput])

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Box className={classes.box}>
        <TextField className={classes.textFieldLeft} id="term-field" label="Find..." value={term} onChange={event => setTerm(event.target.value)}/>
        <TextField className={classes.textFieldMain} id="location-field" label="Location" value={location} onChange={event => setLocation(event.target.value)}/>
        <Button className={classes.button} variant="contained" color="primary" type="submit">
          Search
        </Button>
      </Box>
      <Box className={classes.boxAdv}>
        <Box>
          <InputLabel>Search Radius</InputLabel>
          <Select className={classes.select} value={range} label="Search Radius" onChange={event => setRange(event.target.value)}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </Box>
        <Box>
          <InputLabel>Number of Results</InputLabel>
          <Select className={classes.select} value={limit} label="Number of Results" onChange={event => setLimit(event.target.value)}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </Box>
        <Box>
          <InputLabel>Sort By</InputLabel>
          <Select className={classes.select} value={sortBy} label="Sort By" onChange={event => setSortBy(event.target.value)}>
            <MenuItem value={'rating'}>Rating</MenuItem>
            <MenuItem value={'distance'}>Distance</MenuItem>
            <MenuItem value={'name'}>Name</MenuItem>
          </Select>
        </Box>
        <Favorite />
      </Box>
    </form>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxAdv: {
    padding: '6px 0 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textFieldLeft: {
    width: 300,
    padding: '0 0 0 7px',
  },
  textFieldMain: {
    width: 300,
    padding: '0 0 0 0',
  },
  button: {
    borderRadius: 0,
  },
  select: {
    width: 150,
  },
}))
