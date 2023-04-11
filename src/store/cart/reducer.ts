import { Reducer } from "redux";
import {ActionTypes, ICartState } from "./types";

import produce from "immer";

const INITIAL_STATE:ICartState ={
    items: [],
    failedStockCheck: [],
}


const cart: Reducer<ICartState> = ( state = INITIAL_STATE, action) => {
    return produce(state, draft =>{
        switch(action.type){
            
        }
        default:{
            return state
        }
    })
}


export default cart;