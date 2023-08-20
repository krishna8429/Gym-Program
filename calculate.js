document.addEventListener('DOMContentLoaded', function() {
    const calculatedBMR = localStorage.getItem('calculatedBMR');
    if (calculatedBMR) {
      document.getElementById('calculatedBMR').textContent = calculatedBMR;
    }
  });
  