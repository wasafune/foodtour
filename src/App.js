import React from 'react'

import './App.css'

import Main from './components'
import TourContextProvider from './contexts/TourContext'


function App() {
  return (
    <div className="App">
      <TourContextProvider>
        <Main />
      </TourContextProvider>
    </div>
  )
}

export default App
