import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import AllCateogories from './components/AllCategories'
import { Route, Routes } from 'react-router-dom'
import data from './data'
import RenderPrueba from './components/RenderPrueba'
import { useState } from 'react'
import Basket from './components/Basket'
import Results from './components/Results'
import ListProducts from './components/ListProducts'

//si hay problemas fijarse si es porque no estoy compartiendo los productos tambien

function App() {
  
  const [mostrar, setMostrar] = useState(false);


  





  return (
    <div className="App">
      <Header  setMostrar={setMostrar} mostrar={mostrar}  />
      <Basket     />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/allcategories' element={<AllCateogories/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/resultados' element={<Results/>} />
        <Route path='/products' element={<ListProducts/>} />
      </Routes>
      
    </div>

    

  )
}

export default App
