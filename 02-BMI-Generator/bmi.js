const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0 || height === "") {
        results.innerHTML = `Please enter a valid number ${height}`;
    }
    else if (isNaN(weight) || weight <= 0 || weight === "") {
        results.innerHTML = `Please enter a valid number ${weight}`;
    }
    else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.5) {
            results.innerHTML = `Underweight: ${bmi}`;
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            results.innerHTML = `Normal weight: ${bmi}`;
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            results.innerHTML = `Overweight: ${bmi}`;
        }
        else {
            results.innerHTML = `Obesity: ${bmi}`;
        }
    }
});