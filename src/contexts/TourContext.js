import React, { createContext, useState } from 'react'
import axios from 'axios'

export const TourContext = createContext()


const API_ENDPOINT = 'https://foodtour-api.herokuapp.com'

export default function TourContextProvider(props) {
  const [tour, setTour] = useState([])
  const [tourInput, setTourInput] = useState({})
  const [tourConfirmed, setTourConfirmed] = useState(false)
  const [savedTour, setSavedTour] = useState({ selected: [], items: []})
  const [savedTourCount, setSavedTourCount] = useState(Object.keys(JSON.parse(localStorage.getItem('tourFavorites') || '{}')).length)

  const updateTour = async (term, location, range, limit, sortBy) => {
    const params = { term, location, range, limit, sortBy }
    setSavedTour({ selected: [], items: []})
    const { data } = await axios.get(`${API_ENDPOINT}/search`, {
      params,
    })
    setTour(data)
    setTourConfirmed(false)
    setTourInput(params)
  }

  const toggleTourConfirmed = () => setTourConfirmed(!tourConfirmed)

  const updateSavedTour = (selected, items) => {
    setSavedTour({ selected, items })
  }

  const setFavoriteTour = (name) => {
    let tourFavorites = localStorage.getItem('tourFavorites') || '{}'
    tourFavorites = JSON.parse(tourFavorites)
    tourFavorites = {
      ...tourFavorites,
      [name]: { savedTour, tourInput, tour },
    }

    localStorage.setItem('tourFavorites', JSON.stringify(tourFavorites))
    setSavedTourCount(savedTourCount + 1)
  }

  const removeFavoriteTour = (name) => {
    let tourFavorites = localStorage.getItem('tourFavorites') || '{}'
    tourFavorites = JSON.parse(tourFavorites)
    tourFavorites = {
      ...tourFavorites,
    }
    delete tourFavorites[name]

    localStorage.setItem('tourFavorites', JSON.stringify(tourFavorites))
    setSavedTourCount(savedTourCount - 1)
  }

  const applyFavoriteTour = (name) => {
    const tourFavorites = localStorage.getItem('tourFavorites')
    const tourFavorite = JSON.parse(tourFavorites)[name]
    setTour(tourFavorite.tour)
    setSavedTour(tourFavorite.savedTour)
    setTourInput(tourFavorite.tourInput)
    setTourConfirmed(true)
  }

  return (
    <TourContext.Provider value={{
      tour,
      tourInput,
      tourConfirmed,
      savedTour,
      updateTour,
      toggleTourConfirmed,
      updateSavedTour,
      setFavoriteTour,
      applyFavoriteTour,
      savedTourCount,
      removeFavoriteTour
    }}>
      {props.children}
    </TourContext.Provider>
  )
}
