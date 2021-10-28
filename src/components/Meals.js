import MealCard from "./MealCard";

function Meals({mealsData, handleAddToCart, handleCommentSubmit}) {
    return (
        <>
            <h2>These are our meals!</h2>
            {mealsData.map(meal => {
                return (
                    <MealCard key={meal.id} meal={meal} handleAddToCart={handleAddToCart} handleCommentSubmit={handleCommentSubmit}/>
                )
            })}
        </>
    )
}

export default Meals;