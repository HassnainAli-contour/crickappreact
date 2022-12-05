import React from "react"; 

export default function SelectedItemCard(props){
    

    console.log(props.obj)
    return(

        <div  className="SelectedItem" onClick={()=>{}}>
            <div>
                <img src={props.obj.image} alt={props.obj.title}/>
                <h3  >
                    {props.obj.title}
                </h3>
                  <h4>{props.obj.category}</h4>  
                  
            </div>  
            <p>
                <div style={{"justifyContent":"center","marginBottom":"-20px"}}>
                   $ {props.obj.price} <button >{" Add to Cart "} </button>
                </div>
                <br/>
                {props.obj.description}
            </p>

        </div>
    );
}