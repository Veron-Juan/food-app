import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import AllCateogories from './components/AllCategories'
import { Route, Routes } from 'react-router-dom'
import data from './data'
import RenderPrueba from './components/RenderPrueba'
import { useState } from 'react'
import Basket from './components/Basket'

//si hay problemas fijarse si es porque no estoy compartiendo los productos tambien

function App() {
 
  const [mostrar, setMostrar] = useState(false);
  return (
    <div className="App">
      <Header  setMostrar={setMostrar} mostrar={mostrar}  />
      <Basket   mostrar={mostrar}  />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/allcategories' element={<AllCateogories/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
      
    </div>

    

  )
}

export default App
