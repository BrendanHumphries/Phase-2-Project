import { useState } from "react";

function MealCard({meal:{name, description, image, comments, price}, meal, handleAddToCart, handleCommentSubmit}) {
    const [commentData, setCommentData] = useState('');
    const [isInCart, setIsInCart] = useState(false);
    
    function handleChange(event) {
        setCommentData(event.target.value);
    }
    
    if (!isInCart) {
        return (
            <div className="food-div">
                <h3 id="foodname">{name}</h3>
                <img src={image} alt={name} className="foodimage" />
                <p id="fooddescription">{description}</p>
                <p id="foodprice">Price: ${price}</p>
                <button id="addbutton" onClick={() => {
                    setIsInCart(!isInCart);
                    handleAddToCart(meal);
                }} >Add to Cart</button>
                <form id="mealcomment" onSubmit={(event) => handleCommentSubmit(event, commentData, meal)}>
                    <label>Comment on this meal: </label>
                    <input
                        type='text'
                        value={commentData}
                        onChange={handleChange}
                    ></input>
                    <input type='submit'></input>
                </form>
                <h3 id="commenttext">Comments:</h3>
                <ul id="listofcomments">
                    {comments ? comments.map(comment => <li key={comment}>{comment}</li>) : null}
                </ul>
            </div>
        )
    } else {
        return <p id="added">Added to cart!</p>
    }
}

export default MealCard;