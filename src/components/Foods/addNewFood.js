import React from 'react';

const AddFood = (props) => {
    const addFoodHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={addFoodHandler}>
            <label htmlFor="foodName">Food Name</label>
            <input id="foodName" type="text" />
            <label htmlFor="foodCalories">Calories</label>
            <input id="foodCalories" type="text" />
            <label htmlFor="mealtime">Meal Time</label>
            <select id="mealtime">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="snack">Snack</option>
                <option value="dessert">Desert</option>
            </select>
        </form>
    );
}

export default AddFood;