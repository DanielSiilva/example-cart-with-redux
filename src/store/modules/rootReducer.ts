// CombineReducers: Cria um objeto com todos os estados e faz a ligação com os reducers para que a store possa guarda-los

import {combineReducers} from 'redux'
import cart from '../cart/reducer'



export default combineReducers({
    cart,
})