import { useState } from "react";

function MealCard({meal:{name, description, image, comments, price}, meal, handleAddToCart, handleCommentSubmit}) {
    const [commentData, setCommentData] = useState('');
    
    function handleChange(event) {
        setCommentData(event.target.value);
    }
    
    return (
        <>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(meal)}>Add to Cart</button>
            <form onSubmit={(event) => handleCommentSubmit(event, commentData, meal)}>
                <label>Comment on this meal: </label>
                <input
                    type='text'
                    value={commentData}
                    onChange={handleChange}
                ></input>
                <input type='submit'></input>
            </form>
            <h3>Comments:</h3>
            <ul>
                {comments ? comments.map(comment => <li key={comment}>{comment}</li>) : null}
            </ul>
        </>
    )
}

export default MealCard;