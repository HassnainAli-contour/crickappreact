import React, { useContext, useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ItemCard from "./ItemCard";
import { ItemListContext } from "./itemListContext";
import SelectedItemCard from "./SelectedItemCard";


export default function({match}){
    // console.log(match);
    // const params = new URLSearchParams(window.location.pathname);
    // console.log(params.getAll())
    
    let [item,setitem]=useState({})
    var val= useContext(ItemListContext)
    const { id } = useParams();
    useEffect(()=>{
       let citem = val.filter((x)=> x.id==id);
       console.log(citem);
       setitem(citem[0])
    },[])


    
    return(<div>
           
        <h1> Selected Item</h1>
        <SelectedItemCard obj={item}/>
    </div>)

}