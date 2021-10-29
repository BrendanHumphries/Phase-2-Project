function CartItem({item, handleRemoveFromCart}) {
    return (
        <>
            <h4 className="itemincart">{item.name}</h4>
            <p className="itemincart">$ {item.price}</p>
            <button className="itemincart" onClick={() => handleRemoveFromCart(item)}>Remove From Cart</button>
        </>
    )
}

export default CartItem;