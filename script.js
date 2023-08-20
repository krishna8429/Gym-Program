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
  
    // Store the calculated BMR in local storage
    localStorage.setItem('calculatedBMR', bmr.toFixed(2));
  
    // Redirect to the calculate.html page
    window.location.href = 'calculate.html';
  }
  