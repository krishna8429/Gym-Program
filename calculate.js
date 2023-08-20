// Assume this function calculates the BMR and updates the displayed value
function calculateBMR() {
  // Calculate BMR logic here
  // ...

  // Update the displayed BMR value
  const calculatedBMR = 1500; // Replace with actual calculated BMR
  document.getElementById("calculatedBMR").textContent = calculatedBMR;
}

// Function to show the goal options when the button is clicked
function showGoalOptions() {
  const goalOptions = ["Weight Gain", "Muscle Gain", "Maintain Weight"];
  const goalOptionsString = goalOptions.map(option => `<option>${option}</option>`).join("");

  const selectElement = document.createElement("select");
  selectElement.innerHTML = goalOptionsString;

  document.querySelector(".container").appendChild(selectElement);
}

document.getElementById("enterGoalButton").addEventListener("click", showGoalOptions);
