import React from "react";
import {createStore} from 'redux';


const initState=[]

const cartReducer=(state=initState,action)=>{
    // console.log(action)
    switch(action.type){
        case "ADD":
            if(!state.includes(action.obj))
                state = [...state,action.obj];
            return state
        case "REMOVE":
            state= state.filter(x=>x.id!=action.obj.id)
            console.log(state)
            return [...state]
    }
}

export const store = createStore(cartReducer)