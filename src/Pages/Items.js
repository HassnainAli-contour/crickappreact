import React,{useContext} from "react";
import { ItemListContext } from "./itemListContext";
import Player from "./Player";

export default function(){
    const val = useContext(ItemListContext)
    return (<div className="DataContainer">
            <h1>{val.length}</h1>
             <div className="Data"> 
                {   val.length===0?<p>Empty</p>:
                    val.map(i=>(
                        <Player obj={i}/>
                    ))
                }
            </div>
    </div>)
}