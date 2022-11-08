import React from 'react'

const Cart = ({Products,price, setPrice, price2,setPrice2,  price3, setPrice3}) => {
console.log(Products[0].price*price);
console.log(Products[1].price*price2);
console.log(Products[2].price*price3);
  return (
    <>
        
        <div className="cart">
                <h1>Cart</h1>
                  <div className="cartdata">
                    <div>{Products[0].price}</div>
                    <div>x</div>
                    <div>{price}</div>
                    <div>=</div>
                    <div>{Products[0].price*price}</div>
                  </div>
                  <div className="cartdata">
                    <div>{Products[1].price}</div>
                    <div>x</div>
                    <div>{price2}</div>
                    <div>=</div>
                    <div>{Products[1].price*price2}</div>
                  </div>
                  <div className="cartdata">
                    <div>{Products[2].price}</div>
                    <div>x</div>
                    <div>{price3}</div>
                    <div>=</div>
                    <div>{Products[2].price*price3}</div>
                  </div>

                  <div className="total">
              <div>Total =</div>
              <div>{Products[0].price*price+ Products[1].price*price2+Products[2].price*price3}</div>
            </div>
                 
            </div>
           
    </>
  )
}

export default Cart