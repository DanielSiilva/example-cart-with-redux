import { AxiosResponse } from "axios";
import { IState } from "..";
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from "./actions";
import {all, takeLatest, select, call, put} from 'redux-saga/effects'
import api from "../../service/api";
import { ActionTypes } from "./types";

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockRequest{
    id: number,
    quantity: number
}

function* checkProductStock({payload}:checkProductStockRequest){
    const {product} = payload

    const currentQuantity:number = yield select((state: IState) =>{
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
    })

    const availableStockResponse: AxiosResponse<IStockRequest> = yield call(api.get, `stock/${product.id}`)

    if(availableStockResponse.data.quantity > currentQuantity){
        yield put(addProductToCartSuccess(product))
    }else{
        yield put(addProductToCartFailure(product.id))
    }
}


export default all([
    takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
])