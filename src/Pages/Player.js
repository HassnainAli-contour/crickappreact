import React from "react"; 
import { Link } from "react-router-dom";

export default function Player(props){
    

    console.log(props.obj)
    return(

        <div  className="player" onClick={()=>{}}>
            <img src={props.obj.image} alt={props.obj.title}/>
            <h4  style={{"width":"50%"}}>
                {props.obj.title}
            </h4>
            <p>
                <div style={{"justifyContent":"center","marginBottom":"-20px"}}>
                    {props.obj.price} <button >{" Add to Cart "}</button> <Link to={'/items/'+props.obj.id}>details...</Link>
                </div>
                <br/>
                {props.obj.description}
            </p>

        </div>
    );
}