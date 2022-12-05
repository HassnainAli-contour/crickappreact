import React from "react"; 
import { Link } from "react-router-dom";
import { add,store,remove } from "./CartRedux";


export default function CartItemCard(props){
    

   
    return(

        <div  className="item" >
            <img src={props.obj.image} alt={props.obj.title}/>
            <h4  style={{"width":"50%"}}>
                {props.obj.title}
            </h4>
            <p>
                <div style={{"justifyContent":"center","marginBottom":"-20px"}}>
                    $ {props.obj.price} 
                    <button onClick={()=>{ 
                             store.dispatch(   {type:"REMOVE",obj:props.obj}  )}}>
                                {" Remove Cart "}   
                    </button> 
                
                </div>
                <br/>
                {props.obj.description}
            </p>

        </div>
    );
}