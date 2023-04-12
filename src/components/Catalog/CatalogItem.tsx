import { IProduct } from "../../store/cart/types"

interface CatalogItemProps{
    product: IProduct
}

export function CatalogItem ({product}: CatalogItemProps){


    return (
        <article key={product.id}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {'  '}

            <button 
                type="button"
                // onClick={handleAddProductToCart}
            > 
                Comprar
            </button>

            {/* {hasFailedStockCheck && 
                <span style={{color: 'red'}}> Falta de estoque </span>
            } */}

        </article>
    )
}