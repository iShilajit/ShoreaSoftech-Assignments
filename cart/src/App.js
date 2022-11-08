
import './App.css';
import Cart from './Components/Cart';
import Product from './Components/Product';
import React, { useState } from 'react'
function App() {
  const Products=[
    {id: 1, name:`Product-1`,price:100},
    {id: 2, name:`Product-2`,price:200},
    {id: 3, name:`Product-3`,price:300},

]


const[price,setPrice]=useState(0)
const[price2,setPrice2]=useState(0)
const[price3,setPrice3]=useState(0)


console.log(price,price2,price3);
  return (
    <div className="App">
      <div className="main">
          <Product Products={Products} price={price} setPrice={setPrice} price2={price2} setPrice2={setPrice2}  price3={price3} setPrice3={setPrice3}/>
      <Cart Products={Products} price={price} setPrice={setPrice} price2={price2} setPrice2={setPrice2}  price3={price3} setPrice3={setPrice3}/>
          </div>
     
    </div>
  );
}

export default App;
