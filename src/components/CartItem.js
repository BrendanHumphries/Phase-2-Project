function CartItem({item, handleRemoveFromCart}) {
    return (
        <>
            <h4>{item.name}</h4>
            <p>$ {item.price}</p>
            <button onClick={() => handleRemoveFromCart(item)}>Remove From Cart</button>
        </>
    )
}

export default CartItem;