function calculateBMR() {
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;
  
    let bmr;
  
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  
    // Store data in localStorage or pass it to the next page using query parameters
    // For simplicity, let's just alert the calculated BMR for now
    alert(`Your Basal Metabolic Rate (BMR) is: ${bmr.toFixed(2)}`);
  }
  