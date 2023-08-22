document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("calculator-form");
    const calculateButton = document.getElementById("calculate");

    calculateButton.addEventListener("click", function() {
        const age = parseInt(form.age.value);
        const height = parseInt(form.height.value);
        const weight = parseFloat(form.weight.value);
        const gender = form.gender.value;
        const activity = form.activity.value;

        // Calculate calorie intake based on user input
        const calorieIntake = calculateCalories(age, height, weight, gender, activity);

        // Store data in sessionStorage
        sessionStorage.setItem("calories", calorieIntake);

        // Redirect to calculate.html
        window.location.href = "calculate.html";
    });

    // Your calorie calculation function
    function calculateCalories(age, height, weight, gender, activity) {
        // Replace this with your actual calorie calculation logic
        // This is just a placeholder calculation
        return Math.round(10 * weight + 6.25 * height - 5 * age + (gender === "male" ? 5 : -161)) * activityValue(activity);
    }

    // Activity level values for calculation
    function activityValue(activity) {
        switch (activity) {
            case "sedentary": return 1.2;
            case "lightlyActive": return 1.375;
            case "moderatelyActive": return 1.55;
            case "veryActive": return 1.725;
            case "superActive": return 1.9;
            default: return 1;
        }
    }
});







// document.getElementById("calculateBtn").addEventListener("click", function() {
//   const age = parseInt(document.getElementById("age").value);
//   const height = parseInt(document.getElementById("height").value);
//   const weight = parseInt(document.getElementById("weight").value);
//   const gender = document.getElementById("gender").value;
//   const activityLevel = document.getElementById("activity").value;

//   let caloriesIntake;

//   // Calculate calories based on gender and activity level
//   if (gender === "male") {
//       if (activityLevel === "not-active") {
//           caloriesIntake = 1.2 * (66 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
//       } else if (activityLevel === "active") {
//           caloriesIntake = 1.375 * (66 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
//       } else if (activityLevel === "very-active") {
//           caloriesIntake = 1.55 * (66 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
//       }
//   } else if (gender === "female") {
//       if (activityLevel === "not-active") {
//           caloriesIntake = 1.2 * (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
//       } else if (activityLevel === "active") {
//           caloriesIntake = 1.375 * (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
//       } else if (activityLevel === "very-active") {
//           caloriesIntake = 1.55 * (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
//       }
//   }

//   // Display the result
//   const resultContainer = document.createElement("div");
//   resultContainer.innerHTML = `<p>Your estimated daily calories intake: <strong>${caloriesIntake.toFixed(2)} calories</strong></p>`;
//   document.getElementById("calculator-form").appendChild(resultContainer);
// });

