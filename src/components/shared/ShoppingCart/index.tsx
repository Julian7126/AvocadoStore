"use client"
import { FaCartShopping } from "react-icons/fa6";
import  styles from "./ShoppingCart.module.css"
import { useState } from "react";




export const ShoppingCart = () => {

    const [countItems, setCountItems] = useState(0)


    return (
        
            
        <button className= {styles.ShoppingCart}>
        <span className= {styles.counter}>{countItems}</span>
           <FaCartShopping />
        </button>

    
    );

 }