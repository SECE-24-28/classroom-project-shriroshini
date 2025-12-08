function selectPlan(price, validity, data, description) {
    if (confirm(`Confirm Recharge:\n\nPlan: ₹${price}\nValidity: ${validity}\nData: ${data}\n\nProceed to payment?`)) {
        alert('Recharge Successful!');
        window.location.href = 'dashboard1.html';
    }
}
