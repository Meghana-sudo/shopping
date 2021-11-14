import React, { useContext, createContext, useReducer } from 'react'
import faker from "faker";
import { cartReducer } from './Reducers';

const Cart= createContext();
faker.seed(99);

const Context = ({children}) => {

    const products= [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name:faker.commerce.productName(),
        inStock: faker.random.arrayElement([1, 3, 5, 6, 7]),
        price:faker.commerce.price(),
        image:faker.random.image(),
        

    }));

  const [state, dispatch] = useReducer(cartReducer, {
    products:products,
    cart:[]
  });


    return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>;
};



export const CartState=()=>{
    return useContext(Cart);
}

export default Context;
