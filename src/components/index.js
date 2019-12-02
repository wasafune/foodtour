import React, { useContext } from 'react'
import { Container, Paper, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Search from './Search'
import Tour from './Tour'

import { TourContext } from '../contexts/TourContext'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
  },
  boxSearchFull: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    flexDirection: 'row',
    transition: '1s',
    background: 'teal',
    padding: '6px 0',
  },
  boxSearchCollapsed: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    transition: '1s',
    background: '#f4efef',
    padding: '6px 0',
  },
  paperSearchFull: {
    display: 'flex',
    margin: '25vh 0 0 0',
    height: 400,
    width: 900,
    justifyContent: 'center',
    transition: '1s',
    background: '#f4efef',
  },
  paperSearchCollapsed: {
    display: 'flex',
    width: 900,
    justifyContent: 'center',
    background: '#f4efef',
    transition: '1s',
  },
}))


export default function Main(props) {
  const classes = useStyles()

  const { tour } = useContext(TourContext)


  return (
    <Container className={classes.container}>
      <Box className={tour.length ? classes.boxSearchCollapsed: classes.boxSearchFull}>
        <Paper elevation={tour.length ? 0 : 3} className={tour.length ? classes.paperSearchCollapsed: classes.paperSearchFull}>
          <Search />
        </Paper>
      </Box>
      <Tour />
    </Container>
  )
}
