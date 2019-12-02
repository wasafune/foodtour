// This component is heavily based on beautiful dnd's multi list example
import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, TextField, Fade } from '@material-ui/core'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'


import { TourContext } from '../../contexts/TourContext'
import TourCard from './TourCard'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const grid = 4

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid,
  margin: '0',
  // styles we need to apply on draggables
  ...draggableStyle,
})

const getItemListStyle = (isDraggingOver, tourConfirmed) => ({
  background: isDraggingOver ? 'lightblue' : '#ff8080',
  padding: grid,
  width:  tourConfirmed ? 0 : '50%',
  height: 650,
  overflow: 'auto',
  transition: '1s'
})
const getSelectedListStyle = (isDraggingOver, tourConfirmed) => ({
  background: isDraggingOver ? 'lightgreen' : 'lightgreen',
  padding: grid,
  width: tourConfirmed ? '100%' : '50%',
  height: 650,
  overflow: 'auto',
  transition: '1s',
})

const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
  },
  boxContainerHidden: {
    display: 'none',
  },
  boxBottom: {
    textAlign: 'center',
    padding: '12px 0',
    backgroundColor: 'burlywood',
  },
  textField: {
    backgroundColor: 'white',
    width: 260,
    margin: '6px 0',
  },
  p: {
    margin: '0 0 4px 0',
  },
}))


export default function TourDnd() {
  const classes = useStyles()

  const {
    tour,
    tourConfirmed,
    savedTour,
    toggleTourConfirmed,
    updateSavedTour,
    setFavoriteTour,
  } = useContext(TourContext)


  const [items, setItems] = useState([])
  const [selected, setSelected] = useState([])
  const [tourName, setTourName] = useState('')

  useEffect(() => {
    if (savedTour.selected.length) {
      setItems(savedTour.items)
      setSelected(savedTour.selected)
      return
    }
    const cardsMapped = tour
      ? tour.map((obj, i) => ({ id: `${i}`, content: obj }))
      : []
    setItems(cardsMapped)
    setSelected([])
  }, [tour, savedTour])

   const stateHash = {
     items,
     selected,
   }
  const getList = id => stateHash[id]

  const onDragEnd = result => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      const updatedList = reorder(
          getList(source.droppableId),
          source.index,
          destination.index
      )
      const setter = source.droppableId === 'items' ? setItems : setSelected

      setter(updatedList)
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination,
      )

      setItems(result.items)
      setSelected(result.selected)
    }
  }

  const handleConfirmClick = () => {
    toggleTourConfirmed()
    if (!tourConfirmed) updateSavedTour(selected, items)
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  return (
    <Box className={tour.length ? "" : classes.boxContainerHidden}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box className={classes.box}>
          <Droppable droppableId="selected">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getSelectedListStyle(snapshot.isDraggingOver, tourConfirmed)}>
                {selected.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}>
                          <Fade in={true}>
                            <Box>
                              <TourCard
                                key={item.content.id}
                                rank={Number(item.id) + 1}
                                name={item.content.name}
                                url={item.content.url}
                                imageUrl={item.content.image_url}
                                rating={item.content.rating}
                                displayAddress={item.content.location.display_address}
                                displayPhone={item.content.display_phone}
                                distance={item.content.distance}
                                price={item.content.price}
                                reviewCount={item.content.review_count}
                              />
                            </Box>
                          </Fade>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="items">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getItemListStyle(snapshot.isDraggingOver, tourConfirmed)}>
                {items.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}>
                          <Fade in={true}>
                            <Box>
                              <TourCard
                                key={item.content.id}
                                rank={Number(item.id) + 1}
                                name={item.content.name}
                                url={item.content.url}
                                imageUrl={item.content.image_url}
                                rating={item.content.rating}
                                displayAddress={item.content.location.display_address}
                                displayPhone={item.content.display_phone}
                                distance={item.content.distance}
                                price={item.content.price}
                                reviewCount={item.content.review_count}
                              />
                            </Box>
                          </Fade>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Box>
      </DragDropContext>
      <Box className={classes.boxBottom}>
        <p className={classes.p}>Drag and drop from RED to GREEN to create your tour!</p>
        <Button variant="contained" color="primary" onClick={handleConfirmClick}>{tourConfirmed ? "Back to Edit" : "Confirm Tour!"}</Button>
        <Box visibility={tourConfirmed ? "visible" : "hidden"}>
          <TextField className={classes.textField} id="term-field" label="Cool tour name here!" value={tourName} onChange={event => setTourName(event.target.value)}/>
          <Box>
            <Button variant="contained" color="primary">Download</Button>
            <Button variant="contained" color="primary" onClick={() => setFavoriteTour(tourName)}>Favorite</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
