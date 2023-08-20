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
  
    // Open a new window with the calculated BMR value
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Calculated BMR</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
      <body>
        <div class="container">
          <h1>Calculated BMR</h1>
          <p>Your Basal Metabolic Rate (BMR) is: ${bmr.toFixed(2)}</p>
        </div>
      </body>
      </html>
    `);
  }
  
