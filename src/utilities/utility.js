const getItemCart = ()=>{
  const getCart = localStorage.getItem('cart');

  if(getCart){
    return JSON.parse(getCart)
  }
  return []
}

const setCartLS = (cart)=>{
   const cartStr = JSON.stringify(cart)
   localStorage.setItem("cart", cartStr);
}

const setItemCart =(id)=>{
  const cart = getItemCart()
  cart.push(id);

  setCartLS(cart)
}

export {setItemCart, getItemCart}