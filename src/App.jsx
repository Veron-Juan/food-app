import Header from './components/Header'

import WelcomeCard from './components/WelcomeCard'


import './App.css'
import Carousel from './components/Carousel'
import Categories from './components/Categories'
import Favorites from './components/Favorites'
import Detail from './components/Detail'

function App() {
  

  return (
    <div className="App">
      <Header/>
      {/* <WelcomeCard/>
      <Categories/>
      <Carousel/>
      <Favorites/> */}
      <Detail/>
      
    </div>
  )
}

export default App
