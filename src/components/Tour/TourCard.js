import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Link,
  Typography,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30vw',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
})

export default function TourCard(props) {
  const classes = useStyles()

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Link href={props.url}>
          <img width="130px" height="130px" src={props.imageUrl}></img>
        </Link>
        <Box className={classes.boxContainer}>
          <Box className={classes.box}>
            <Typography component="h4">
              {props.rank}: <Link href={props.url}>{props.name}</Link>
            </Typography>
            <Rating value={props.rating} precision={0.5} size="small" readOnly/>
            <Typography component="h5">
              {props.displayPhone}
            </Typography>
            <Typography component="h5">
              {props.displayAddress}
            </Typography>
            <Typography component="h5">
              {props.price}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
