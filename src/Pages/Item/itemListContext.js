import React, { useEffect,createContext } from "react";

import { useState } from "react";


export const ItemListContext = createContext() ;

export const ItemListProvider = (props)=> {
    
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=20');
        const items = await data.json();
        console.log(items.length);
         setItems(items);
        // console.log(items[0])
    }

    useEffect(() => {
        fetchItems();
        // variations 
    },[])

    // const [count, setCount] = useState(0)
    return ( <ItemListContext.Provider value={items}>
            {props.children}
         </ItemListContext.Provider>
    );
}