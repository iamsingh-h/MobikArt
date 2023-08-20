import React,{useContext,useState} from 'react'
import {CartContext} from '../CartContext';


const Card = (props) => {
  const [isAdding,setIsAdding] = useState(false);
  const {cart,setCart} = useContext(CartContext);
  const {product} = props;

  const addTocart = (event,product) =>{
    event.preventDefault();
    
    let _cart = {...cart};

    if(!_cart.items){
      _cart.items = []
    }

    const item = _cart.items.find(x => x.id === product.id)

    if(item){
      item.quantity += 1;
    } 
    else{
      _cart.items.push({
        id : product.id,
        quantity : 1,
        title : product.title,
        thumbnail : product.thumbnail,
        price : product.price
      })
    }

  if(!_cart.totalItems){
    _cart.totalItems = 0;
  }  
  _cart.totalItems +=1

  setCart(_cart);
  console.log("cart",_cart)
  setIsAdding(true);
  setTimeout(()=>{
    
    setIsAdding(false);
  },1000)
};
  
   

   
  return (
    <div className='bg-gray-100 rounded-xl py-8 px-4 '>
        <img className = "py-4 px-2 w-full h-72" src={product.thumbnail} alt=""/>

        <div className='flex justify-between items-center mx-4'>
            <h2 className='py-2 font-bold text-lg'>{product.title}</h2>
            <span>⭐{product.rating}</span>
        </div>

        <div className='py-1 text-base px-4'>
          <span>{product.description}</span>
        </div>
       
        
        <div className='flex justify-between items-center mt-4 mx-6' >
            <span className='font-bold'>₹{product.price}</span>
            <button className={`${isAdding ? 'bg-green-500' : 'bg-red-500'} py-1 px-4 font-bold rounded-full text-white`} onClick={(e)=>{addTocart(e,product)}}>ADD{isAdding ? 'ED':''}</button>
        </div>
    </div>
  )
}

export default Card;