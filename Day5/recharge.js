document.getElementById('rechargeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mobile = document.getElementById('mobile').value.trim();
    const operator = document.getElementById('operator').value;
    const planType = document.getElementById('planType').value;
    const mobileError = document.getElementById('mobileError');
    const operatorError = document.getElementById('operatorError');
    const planTypeError = document.getElementById('planTypeError');
    
    let valid = true;
    
    const mobileRegex = /^[6-9][0-9]{9}$/;
    if (!mobileRegex.test(mobile)) {
        mobileError.classList.remove('hidden');
        valid = false;
    } else {
        mobileError.classList.add('hidden');
    }
    
    if (!operator) {
        operatorError.classList.remove('hidden');
        valid = false;
    } else {
        operatorError.classList.add('hidden');
    }
    
    if (!planType) {
        planTypeError.classList.remove('hidden');
        valid = false;
    } else {
        planTypeError.classList.add('hidden');
    }
    
    if (valid) {
        alert(`Recharge Details:\n\nMobile: ${mobile}\nOperator: ${operator.toUpperCase()}\nPlan Type: ${planType.toUpperCase()}\n\nProceeding to plan selection...`);
        localStorage.setItem('selectedMobile', mobile);
        localStorage.setItem('selectedOperator', operator);
        localStorage.setItem('selectedPlanType', planType);
        window.location.href = 'plan.html';
    }
});
