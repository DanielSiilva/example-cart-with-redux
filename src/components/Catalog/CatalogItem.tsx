import { useDispatch, useSelector} from "react-redux";
import { IProduct } from "../../store/cart/types"
import { useCallback } from "react";
import { addProductToCartRequest } from "../../store/cart/actions";

interface CatalogItemProps{
    product: IProduct
}

export function CatalogItem ({product}: CatalogItemProps){
    //Função que vai disparar uma ação
    const dispatch = useDispatch();

    // const hasFailedStockCheck = useSelector<IState>(state =>{
    //     return 
    // })

    const handleAddProductToCart = useCallback(()=>{
        dispatch(addProductToCartRequest(product))
    }, [dispatch, product])


    return (
        <article key={product.id}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {'  '}

            <button 
                type="button"
                onClick={handleAddProductToCart}
            > 
                Comprar
            </button>

            {/* {hasFailedStockCheck && 
                <span style={{color: 'red'}}> Falta de estoque </span>
            } */}

        </article>
    )
}


function dispatch(arg: any){
    throw new Error("Function not implemented.")
}