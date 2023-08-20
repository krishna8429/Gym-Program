document.getElementById("calculateBtn").addEventListener("click", function() {
  const age = parseInt(document.getElementById("age").value);
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const gender = document.getElementById("gender").value;
  const activityLevel = document.getElementById("activity").value;

  let caloriesIntake;

  // Calculate calories based on gender and activity level
  if (gender === "male") {
      if (activityLevel === "not-active") {
          caloriesIntake = 1.2 * (66 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
      } else if (activityLevel === "active") {
          caloriesIntake = 1.375 * (66 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
      } else if (activityLevel === "very-active") {
          caloriesIntake = 1.55 * (66 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
      }
  } else if (gender === "female") {
      if (activityLevel === "not-active") {
          caloriesIntake = 1.2 * (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
      } else if (activityLevel === "active") {
          caloriesIntake = 1.375 * (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
      } else if (activityLevel === "very-active") {
          caloriesIntake = 1.55 * (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
      }
  }

  // Display the result
  const resultContainer = document.createElement("div");
  resultContainer.innerHTML = `<p>Your estimated daily calories intake: <strong>${caloriesIntake.toFixed(2)} calories</strong></p>`;
  document.getElementById("calculator-form").appendChild(resultContainer);
});

