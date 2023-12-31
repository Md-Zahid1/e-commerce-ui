import React, { createContext, useState } from "react";
import all_product from '.././assets/all_product'

export const ShopContext = createContext ();
const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length+1; index++) {
          cart[index]=0;
    }
    return cart;
} 

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());
   

    const addToCart = (itemId) => {
        setCartItem ((prev) => ({...prev, [itemId]:prev[itemId]+1}))  
        console.log('cartItem', cartItem);
    }  

    const removeToCart = (itemId) => {
        setCartItem ((prev) => ({...prev, [itemId]:prev[itemId]-1}))  
    }  

    const contextVlue = {all_product,cartItem, addToCart, removeToCart};

    return (
        <ShopContext.Provider value={contextVlue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider 