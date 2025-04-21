import React from 'react'
import { Navigation } from './pages/Navigation'
// import { SideBar } from './pages/SideBar'
// import Main from './pages/Main'
import './App.css'
// import { Temprature } from './pages/Temprature'
// import { SearchBar } from './pages/SearchBar'
import { NewsMain } from './pages/NewsMain'
import Carousel from './pages/Main'
// import News from './pages/News'
function App() {
  return (
    <div className='App'>
      {/* <Carousel/> */}
      
      <Navigation/>
      <div className='main'>
      {/* <SideBar/> */}
      <div className='Middle'>
      <NewsMain/>
      {/* <Temprature/> */}
      </div>
      </div>
    </div>
  )
}

export default App