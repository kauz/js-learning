// Listen for submit

document.querySelector('#loan-form').addEventListener('submit', calculateResults);

// Calculate results

function calculateResults (e) {
  // UI Vars

  let amount = document.querySelector('#amount');
  let interest = document.querySelector('#interest');
  let years = document.querySelector('#years');

  let monthlyPayment = document.querySelector('#monthly-payment');
  let totalPayment = document.querySelector('#total-payment');
  let totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);
  
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();
}

// Show Error
function showError (error) {
  let card = document.querySelector('.card');
  let heading = document.querySelector('.heading');
  let errorDiv = document.createElement('div');

  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  // Insert above heading
  card.insertBefore(errorDiv, heading);
  errorDiv.style.opacity = 0;
  errorDiv.style.display = "block";

  (function fade() {
    var val = parseFloat(errorDiv.style.opacity);
    if (!((val += .1) > 1)) {
      errorDiv.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();

  // Clear after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError () {
  let error = document.querySelector('.alert');

  error.style.opacity = 1;

  (function fade() {
    if ((error.style.opacity -= .1) < 0) {
      error.style.display = "none";
      document.querySelector('.alert').remove();
    } else {
      requestAnimationFrame(fade);
    }
  })();

}