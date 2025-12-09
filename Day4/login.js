document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError'); 
    
    
    let valid = true;
    
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
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');
        
        if (!storedEmail || !storedPassword) {
            alert('No account found. Please sign up first.');
            return;
        }
        
        if (email !== storedEmail || password !== storedPassword) {
            alert('Invalid email or password!');
            return;
        }
        
        window.location.href = 'dashboard.html';
    }
});
