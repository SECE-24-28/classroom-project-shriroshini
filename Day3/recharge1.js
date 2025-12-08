document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mobile = document.querySelector('input[type="text"]').value;
    const operator = document.querySelectorAll('select')[0].value;
    const planType = document.querySelectorAll('select')[1].value;
    
    if (mobile && operator && planType) {
        alert(`Recharge Details:\n\nMobile: ${mobile}\nOperator: ${operator.toUpperCase()}\nPlan Type: ${planType.toUpperCase()}\n\nProceeding to plan selection...`);
        window.location.href = 'plan1.html';
    }
});
