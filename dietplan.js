// Define diet plan data
const dietPlanData = {
    vegFatLoss: [
        ["Meal", "Food", "Portion Size"],
        ["Breakfast", "Oatmeal with fruits", "1 bowl"],
        ["Snack", "Mixed nuts", "Handful"],
        ["Lunch", "Brown rice with vegetables", "1 plate"],
        ["Snack", "Greek yogurt", "1 serving"],
        ["Dinner", "Chickpea salad", "1 bowl"],
    ],
    vegMuscleGain: [
        ["Meal", "Food", "Portion Size"],
        ["Breakfast", "Scrambled tofu", "1 serving"],
        ["Snack", "Hummus with carrot sticks", "1 serving"],
        ["Lunch", "Quinoa with lentils and veggies", "1 plate"],
        ["Snack", "Almond butter on whole wheat bread", "1 slice"],
        ["Dinner", "Black bean and sweet potato bowl", "1 bowl"],
    ],
    nonVegFatLoss: [
        // ... Similar to vegFatLoss but with non-vegetarian options
    ],
    nonVegMuscleGain: [
        // ... Similar to vegMuscleGain but with non-vegetarian options
    ],
};

// Display the diet plan based on user's goal and diet preference
function displayDietPlan(goal, dietPreference) {
    const dietTable = document.createElement("table");
    const dietPlan = dietPlanData[dietPreference + goal];
    
    for (let i = 0; i < dietPlan.length; i++) {
        const row = document.createElement("tr");
        
        for (let j = 0; j < dietPlan[i].length; j++) {
            const cell = document.createElement(i === 0 ? "th" : "td");
            cell.textContent = dietPlan[i][j];
            row.appendChild(cell);
        }
        
        dietTable.appendChild(row);
    }
    
    const dietPlanContainer = document.getElementById("dietPlan");
    dietPlanContainer.innerHTML = "";
    dietPlanContainer.appendChild(dietTable);
}

// Call the function to display the diet plan (you can customize goal and preference)
displayDietPlan("FatLoss", "veg");
