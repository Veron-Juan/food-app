import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import AllCateogories from './components/AllCategories'
import { Route, Routes } from 'react-router-dom'
import data from './data'
import RenderPrueba from './components/RenderPrueba'
import { useState } from 'react'
import Basket from './components/Basket'


function App() {
  const { products } = data;
  const [cartItems, setCartItmes] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id); // esta constante exist filtra y guarda si hay objetos repetidos
    if(exist) { // si hat alguno:
      //para agregar uno mas al carrito porque se supone que ya hay uno en el array
      setCartItmes(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x))
      
      // console.log(exist)
    } else {
      setCartItmes([...cartItems, {...product, quantity: 1}]) //un array con sus elementos desactruados =  [array q ya esta (si es q hay),  {nuevo array, con quantuty:1}]
      // console.log(cartItems);
      // console.log(product)
    }
    
  }
  const onRemove = (product)=> {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist.quantity === 1){
      setCartItmes(cartItems.filter((x) =>x.id !== product.id));
    } 
    else{
      setCartItmes(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x))
    }
  }
  

  const [mostrar, setMostrar] = useState(false);

  

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} setMostrar={setMostrar} mostrar={mostrar}  />
      <Basket   onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} mostrar={mostrar}  />
      
      {/* <WelcomeCard/>
      <Categories/>
      <Carousel/>
      <Favorites/>
       */}
      {/* <Detail/>
      <AllCateogories/> */}


      <Routes>
        {/* <Route path='/' element={<Header/>}/> */}
        <Route path='/' element={<Home products={products} onAdd={onAdd} onRemove={onRemove} />}/>
        <Route path='/allcategories' element={<AllCateogories/>}/>
        <Route path='/detail' element={<Detail/>}/>
        
      </Routes>
      
    </div>

    

  )
}

export default App
