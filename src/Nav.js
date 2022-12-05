 import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ItemListContext } from "./Pages/Item/itemListContext";
 export default function Nav(){
        const val= useContext(ItemListContext)
        return(
        <div className="Nav">
            <Link to="/items">   
                <h3>Items</h3> 
            </Link>
            <Link to="/about">   
                <h3>About</h3> 
            </Link>
            <Link to="/cart">   
                <h3>Cart</h3> 
            </Link>
            <Link to="/login">   
                <h3>Login</h3> 
            </Link>
            
            <h3>
               Total Products {val.length}
            </h3>
            
        </div>
        )



 }