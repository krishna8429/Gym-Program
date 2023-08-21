// Define workout plan data
const workoutPlanData = {
    // ... (same data as before)
};

// Display the workout plan based on user's goal
function displayWorkoutPlan(goal) {
    const workoutTable = document.createElement("table");
    const workoutPlan = workoutPlanData[goal];

    // Apply some styling to the table
    workoutTable.style.borderCollapse = "collapse";
    workoutTable.style.width = "100%";
    workoutTable.style.marginTop = "20px";
    workoutTable.style.backgroundColor = "#f9f9f9"; // Light gray background

    for (let i = 0; i < workoutPlan.length; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < workoutPlan[i].length; j++) {
            const cell = document.createElement(i === 0 ? "th" : "td");
            cell.textContent = workoutPlan[i][j];

            // Apply alternating row colors
            if (i % 2 === 0) {
                cell.style.backgroundColor = "#ffffff"; // White background
            } else {
                cell.style.backgroundColor = "#f2f2f2"; // Light gray background
            }

            // Apply some padding and border
            cell.style.padding = "8px";
            cell.style.border = "1px solid #ccc";

            row.appendChild(cell);
        }

        workoutTable.appendChild(row);
    }

    const workoutPlanContainer = document.getElementById("workoutPlan");
    workoutPlanContainer.innerHTML = "";
    workoutPlanContainer.appendChild(workoutTable);
}

// Call the function to display the workout plan (customize goal)
displayWorkoutPlan("fatLoss");






// // Define workout plan data
// const workoutPlanData = {
//     fatLoss: [
//         ["Day", "Workout"],
//         ["Day 1", "Cardio and HIIT"],
//         ["Day 2", "Rest"],
//         ["Day 3", "Full Body Strength Training"],
//         ["Day 4", "Rest"],
//         ["Day 5", "Cardio and Core Workout"],
//         ["Day 6", "Rest"],
//         ["Day 7", "Active Rest (Yoga or Light Stretching)"],
//     ],
//     muscleGain: [
//         ["Day", "Workout"],
//         ["Day 1", "Upper Body Strength Training"],
//         ["Day 2", "Rest"],
//         ["Day 3", "Lower Body Strength Training"],
//         ["Day 4", "Rest"],
//         ["Day 5", "Full Body Strength Training"],
//         ["Day 6", "Rest"],
//         ["Day 7", "Active Rest (Mobility Work)"],
//     ],
// };

// // Display the workout plan based on user's goal
// function displayWorkoutPlan(goal) {
//     const workoutTable = document.createElement("table");
//     const workoutPlan = workoutPlanData[goal];

//     for (let i = 0; i < workoutPlan.length; i++) {
//         const row = document.createElement("tr");

//         for (let j = 0; j < workoutPlan[i].length; j++) {
//             const cell = document.createElement(i === 0 ? "th" : "td");
//             cell.textContent = workoutPlan[i][j];
//             row.appendChild(cell);
//         }

//         workoutTable.appendChild(row);
//     }

//     const workoutPlanContainer = document.getElementById("workoutPlan");
//     workoutPlanContainer.innerHTML = "";
//     workoutPlanContainer.appendChild(workoutTable);
// }

// // Call the function to display the workout plan (customize goal)
// displayWorkoutPlan("fatLoss");
