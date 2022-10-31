import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import AllCateogories from './components/AllCategories'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <Header/>
      {/* <WelcomeCard/>
      <Categories/>
      <Carousel/>
      <Favorites/>
      <Detail/>
      <AllCateogories/> */}


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allcategories' element={<AllCateogories/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
      
    </div>

    

  )
}

export default App
