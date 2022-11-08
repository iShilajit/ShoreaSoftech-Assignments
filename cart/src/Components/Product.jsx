
import Cart from './Cart'


const Product = ({Products,price, setPrice, price2,setPrice2,  price3, setPrice3}) => {
 
  
   
       
    
  return (
    <>
      <div className="product">
                <h1>Products</h1>
               
                   <div className="productrow">
                        <div className="productdata" >
                            <div>{Products[0].name}</div>
                            <div>{Products[0].price}</div>
                            <div className="buttonrow"> 
                           <button onClick={(e) => { if (price > 0) { setPrice(price - 1) } }}>-</button>
                            <h5>{price}</h5>
                            <button onClick={(e)=>setPrice(price+1)}>+</button>
                            </div>
                           
                            </div>

                            <div className="productdata" >
                            <div>{Products[1].name}</div>
                            <div>{Products[1].price}</div>
                            <div className="buttonrow"> 
                           <button onClick={(e) => { if (price2 > 0) { setPrice2(price2 - 1) } }}>-</button>
                            <h5>{price2}</h5>
                            <button onClick={(e)=>setPrice2(price2+1)}>+</button>
                            </div>
                           
                            </div>

                            <div className="productdata" >
                            <div>{Products[2].name}</div>
                            <div>{Products[2].price}</div>
                            <div className="buttonrow"> 
                           <button onClick={(e) => { if (price3 > 0) { setPrice3(price3 - 1) } }}>-</button>
                            <h5>{price3}</h5>
                            <button onClick={(e)=>setPrice3(price3+1)}>+</button>
                            </div>
                           
                            </div>
                         
                      
                    </div>
               
                

            </div>
    </>
  )
}

export default Product