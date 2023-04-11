import {ActionTypes, IProduct} from './types'

export function addProductToCartRequest (product: IProduct){
    return{
        //Nome da ação - para podermos indetificar 
        type: ActionTypes.addProductToCartRequest,
        //payload: oque queremos executar com essa ação
        payload: {
            product
        }
    }
}

export function addProductToCartSuccess (product: IProduct){
    return {
        type: ActionTypes.addProductToCartSuccess,
        payload:{
            product
        }
    }
}

export function addProductToCartFailure (productId: number){
    return{
        type: ActionTypes.addProductToCartFailure,
        payload: {
            productId
        }
    }
}