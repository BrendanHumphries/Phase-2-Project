import MealCard from "./MealCard";

function Meals({mealsData}) {
    return (
        <>
            <h2>These are our meals!</h2>
            {mealsData.map(meal => {
                return (
                    <MealCard key={meal.id} meal={meal} />
                )
            })}
        </>
    )
}

export default Meals;