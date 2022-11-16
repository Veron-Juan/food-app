import Header from './components/Header'
import Home from './views/Home.jsx'
import Detail from './views/Detail'
import AllCateogories from './views/AllCategories'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Basket from './components/Basket'
import Results from './views/Results'
import ListProducts from './views/ListProducts'

function App() {
  
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="App">
      <Header  setMostrar={setMostrar} mostrar={mostrar}  />
      <Basket/>

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
