import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import AllCateogories from './components/AllCategories'
import { Route, Routes } from 'react-router-dom'
import Results from './components/Results'
import ListProducts from './components/ListProducts'

import React from 'react'




function Rutas() {
  return (
    <div>
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

export default Rutas
