document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
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
    
    window.location.href = 'dashboard1.html';
});
