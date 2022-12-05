import React from "react"; 
import { Link } from "react-router-dom";
import { add,store,remove } from "../Cart/CartRedux";


export default function ItemCard(props){
    

    
    // console.log(props.obj)
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
                             store.dispatch(   {type:"ADD",obj:props.obj}  )}}>
                                {" Add to Cart "}   
                    </button> 
                    <Link to={'/items/'+props.obj.id}>details...</Link>
                </div>
                <br/>
                {props.obj.description}
            </p>

        </div>
    );
}