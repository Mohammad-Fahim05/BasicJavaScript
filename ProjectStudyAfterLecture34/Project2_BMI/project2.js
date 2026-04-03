 const form = document.getElementById('bmiForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const height = parseFloat(document.getElementById('height').value);
      const weight = parseFloat(document.getElementById('weight').value);
      const results = document.getElementById('results');

      if (!height || height <= 0 || !weight || weight <= 0) {
        results.innerHTML = "⚠️ Please enter valid values";
        return;
      }

      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      let category = "";
      if (bmi < 18.6) {
        category = "Underweight";
      } else if (bmi <= 24.9) {
        category = "Normal";
      } else {
        category = "Overweight";
      }

      results.innerHTML = `Your BMI is ${bmi} (${category})`;
    });