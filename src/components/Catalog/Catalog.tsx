
import { useEffect, useState } from "react"
import { IProduct } from "../../store/cart/types"
import api from "../../service/api"
import { CatalogItem } from "./CatalogItem"



export function Catalog (){
    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(()=> {
        api.get('/products').then(response =>{
            setCatalog(response.data)
        })
    }, [])

    
    

    return (
        <main>
            <h1> Catalog </h1>
            {
                catalog.map(product => (
                    <CatalogItem key={product.id} product={product} />
                ))
            }
        </main>
    )
}