 import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ItemListContext } from "./Pages/itemListContext";
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
            <h3>
               Total Products {val.length}
            </h3>
            
        </div>
        )



 }