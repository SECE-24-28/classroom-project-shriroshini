document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    let valid = true;
    
    if (name.trim().length < 2) {
        nameError.classList.remove('hidden');
        valid = false;
    } else {
        nameError.classList.add('hidden');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.classList.remove('hidden');
        valid = false;
    } else {
        emailError.classList.add('hidden');
    }
    
    if (password.length < 6) {
        passwordError.classList.remove('hidden');
        valid = false;
    } else {
        passwordError.classList.add('hidden');
    }
    
    if (valid) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        window.location.href = 'dashboard.html';
    }
});
