import { useSelector } from "react-redux"
import { IState } from "../../store"
import { ICartItem } from "../../store/cart/types"



export function Cart (){
    //useSelector: função que permie acesso ao state do reducer
    const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)
   
    

    return (
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                </tr>
            </thead>

            <tbody>
                {cart.map(item =>(
                    <tr key={item.product.id}>
                        <td>{item.product.title}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{(item.quantity * item.product.price).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}