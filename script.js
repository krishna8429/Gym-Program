document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate-button");
    const outputDiv = document.getElementById("output");
    const workoutPlan = document.getElementById("workout-plan");
    const dietPlan = document.getElementById("diet-plan");

    calculateButton.addEventListener("click", () => {
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const goal = document.getElementById("goal").value;

        // Example workout and diet plans
        const workoutPlans = {
            weight_loss: "Cardio exercises and low-calorie diet.",
            muscle_gain: "Strength training and high-protein diet.",
            maintain: "Balanced workout and diet to maintain current state."
        };

        const dietPlans = {
            weight_loss: "Reduce calorie intake and focus on whole foods.",
            muscle_gain: "Increase protein and calorie intake for muscle growth.",
            maintain: "Maintain a balanced diet with proper portion control."
        };

        workoutPlan.textContent = workoutPlans[goal];
        dietPlan.textContent = dietPlans[goal];

        outputDiv.classList.remove("hidden");
    });
});
