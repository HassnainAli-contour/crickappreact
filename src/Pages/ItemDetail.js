import React from "react";
import {useParams} from "react-router-dom";

export default function({match}){
    // console.log(match);
    // const params = new URLSearchParams(window.location.pathname);
    // console.log(params.getAll())
    const { id } = useParams();
    console.log(id);
    return(<div>
           
        <h1> Item</h1>
    </div>)

}