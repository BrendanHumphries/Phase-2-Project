import { useEffect, useState } from "react";
import CartItem from "./CartItem";

function Cart({cartData, setCartData, handleRemoveFromCart}) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(cartData.reduce((accumulator, item) => accumulator + item.price, 0));
    }, [cartData])
    
    return (
        <div>
            <h2 id="itemcart">Items in your cart:</h2>
            {cartData.map(item => <CartItem key={item.id} item={item} handleRemoveFromCart={handleRemoveFromCart} />)}
            <h3 id="costtext">Total Cost: ${total}</h3>
            <button id="cartbutton" onClick={() => setCartData([])}>Checkout</button>
        </div>
    )
}

export default Cart;