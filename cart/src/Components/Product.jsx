import React, { useState } from 'react'


const Product = () => {
  
    const Products=[
        {id: 1, name:`Product-1`,price:100},
        {id: 2, name:`Product-2`,price:200},
        {id: 3, name:`Product-3`,price:300},

    ]

    const [calculate,setcalculate]=useState(0)

    const dec=()=>{
        setcalculate(calculate-1)  
    }
    let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const getData=(e)=>{
      
      
     
      
        if(cartItems.length > 0){
          console.log("already in cart")
        }
        else{
          e.quantity = 1;
          cartItems.push(e);
          localStorage.setItem("cartProducts", JSON.stringify(cartItems));
        }
      
        
 
       }

       
    
  return (
    <>
      <div className="product">
                <h1>Products</h1>
                {
                 Products.map((el)=>{
                    return <div className="productrow">
                        <div className="productdata" >
                            <div>{el.name}</div>
                            <div>{el.price}</div>
                            <div className="buttonrow"> 
                            <button onClick={dec}>-</button>
                            <h5>{calculate}</h5>
                            <button onClick={getData(el)}>+</button>
                            </div>
                           
                            </div>
                        
                    </div>
                 })
                }

            </div>
    </>
  )
}

export default Product