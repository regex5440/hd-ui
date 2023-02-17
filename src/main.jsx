import React from 'react'
import ReactDOM from 'react-dom/client'
import ShowCase from './ShowCase'
import { LinearLoader, CircularLoader, BouncyBalls } from './components/loaders'
import { HamBurger } from './components/Menu'

//This will render the showCase
ReactDOM.createRoot(document.getElementById('root')).render(<ShowCase />)


// Loaders
export { LinearLoader, CircularLoader, BouncyBalls }


// Menu
export { HamBurger }