const userName = localStorage.getItem('userName') || 'User';
document.getElementById('userGreeting').textContent = `Welcome, ${userName}!`;

const rechargeHistory = JSON.parse(localStorage.getItem('rechargeHistory')) || [
    { number: '9876543210', operator: 'Airtel', amount: 199, status: 'Success' },
    { number: '9123456780', operator: 'Jio', amount: 299, status: 'Success' }
];

const historyContainer = document.getElementById('rechargeHistory');
rechargeHistory.forEach(recharge => {
    const div = document.createElement('div');
    div.className = 'flex justify-between items-center p-4 bg-gradient-to-r from-green-100 to-teal-100 border-l-4 border-green-500 rounded-xl shadow-md';
    div.innerHTML = `
        <div>
            <p class="font-semibold text-gray-800">${recharge.number}</p>
            <p class="text-sm text-gray-600">${recharge.operator} - Prepaid</p>
        </div>
        <div class="text-right">
            <p class="font-bold text-green-700">₹${recharge.amount}</p>
            <p class="text-xs text-gray-500">${recharge.status}</p>
        </div>
    `;
    historyContainer.appendChild(div);
});

document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    window.location.href = 'index.html';
});
