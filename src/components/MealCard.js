function MealCard({meal:{name, description, image}}) {
    return (
        <>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
            <button>Add to Cart</button>
        </>
    )
}

export default MealCard;