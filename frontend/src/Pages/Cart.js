import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {

  
  
  let total =0 
  const { cart, setCart } = useContext(CartContext);
  const _cart = {...cart}

  const increment = (productId) =>{
    const item = cart.items.find(x => x.id === productId)
    item.quantity += 1
    _cart.totalItems += 1;
    setCart(_cart);
  }


  const decrement = (productId) =>{
    const item = cart.items.find(x => x.id === productId);
    if(item.quantity === 1){
      return;
    }
    item.quantity -= 1
    _cart.totalItems -= 1;
    setCart(_cart);
  }


  const getSum = (quantity,price)=>{
    const sum = price * quantity;
    total += sum;
    return sum;
  }

  const handleDelete = (productId) =>{
    const itemIndex = cart.items.findIndex(x => x.id === productId);
    if (itemIndex !== -1) {
      const deletedItem = _cart.items.splice(itemIndex, 1)[0];
      _cart.totalItems -= deletedItem.quantity;
      setCart(_cart);
    }

    if(cart.items.length === 0){
      setCart({})
    }
    
  }

  const handleOrderNow = () =>{
    window.alert('Order Placed Succesfully!')
    setCart({});
  }
  

  return !cart.items ? (
    <p className="text-center text-6xl py-80">Cart is Empty</p>
  ) : (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">Cart Items</h1>
      <ul>
        {cart.items.map((product) => {
          return (
            <li className="mb-12" key={product.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-16 w-16" src={product.thumbnail} alt="" />
                  <span className="font-bold ml-4 w-48">{product.title}</span>
                </div>
                <div>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none" onClick={()=>{decrement(product.id)}}>
                    -
                  </button>
                  <b className="px-4">{product.quantity}</b>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none" onClick={()=>{increment(product.id)}}>
                    +
                  </button>
                </div>
                <span>₹ {getSum(product.quantity,product.price)} </span>
                <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white" onClick={()=>{handleDelete(product.id)}}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="my-6" />
      <div className="text-right">
        <b>Grand Total:</b>₹ {total}
      </div>
      <div className="text-right mt-6">
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none" onClick={handleOrderNow}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
