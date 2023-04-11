import { useSelector } from "react-redux"



export function Cart (){
    const state = useSelector(state => state)
    console.log(state);
    

    return (
        <>
            <h1> Cart </h1>
            <p></p>
        </>
    )
}