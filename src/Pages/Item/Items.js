import React,{useContext} from "react";
import { ItemListContext } from "./itemListContext";
import ItemCard from "./ItemCard";

export default function Items(){
    const val = useContext(ItemListContext)
    // console.log(val[0])
    return (<div className="DataContainer">
            <h1>{val.length}</h1>
             <div className="Data"> 
                {   
                    val.length===0?<p>Empty</p>:
                    val.map(i=>(
                        <ItemCard obj={i} type="item"/>
                    ))
                }
            </div>
    </div>)
}