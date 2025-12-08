const mobile = localStorage.getItem('selectedMobile');
const operator = localStorage.getItem('selectedOperator');
const planType = localStorage.getItem('selectedPlanType');

document.getElementById('displayMobile').textContent = mobile;
document.getElementById('displayOperator').textContent = operator.toUpperCase();

const API_URL = 'https://675e0e0363b05ed0797a3e5f.mockapi.io/api/v1/plans';

async function fetchPlans() {
    try {
        const response = await fetch(API_URL);
        const plans = await response.json();
        
        const filteredPlans = plans.filter(plan => plan.type === planType);
        
        document.getElementById('loadingMessage').classList.add('hidden');
        document.getElementById('planContainer').classList.remove('hidden');
        
        displayPlans(filteredPlans);
    } catch (error) {
        document.getElementById('loadingMessage').textContent = 'Error loading plans. Please try again.';
        console.error('Error fetching plans:', error);
    }
}

function displayPlans(plans) {
    const planContainer = document.getElementById('planContainer');
    planContainer.innerHTML = '';
    
    const colors = [
        'from-blue-100 to-cyan-100 border-blue-300',
        'from-purple-100 to-pink-100 border-purple-300',
        'from-green-100 to-teal-100 border-green-300',
        'from-orange-100 to-yellow-100 border-orange-300',
        'from-rose-100 to-pink-100 border-rose-300',
        'from-indigo-100 to-purple-100 border-indigo-300'
    ];
    const btnColors = [
        'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
        'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
        'from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600',
        'from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600',
        'from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600',
        'from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600'
    ];
    
    plans.forEach((plan, index) => {
        const div = document.createElement('div');
        const colorIndex = index % 6;
        div.className = `bg-gradient-to-br ${colors[colorIndex]} p-6 rounded-3xl shadow-xl hover:shadow-2xl transition cursor-pointer border-2 hover:scale-105`;
        div.innerHTML = `
            <h3 class="text-2xl font-bold text-gray-800 mb-2">₹${plan.price}</h3>
            <p class="text-gray-700 mb-1 font-medium">Validity: ${plan.validity}</p>
            <p class="text-gray-700 mb-1 font-medium">Data: ${plan.data}</p>
            <p class="text-sm text-gray-600 mb-4">${plan.description}</p>
            <button class="w-full bg-gradient-to-r ${btnColors[colorIndex]} text-white py-2 rounded-xl transition shadow-md font-semibold" onclick="selectPlan('${plan.id}')">Select</button>
        `;
        planContainer.appendChild(div);
    });
}

let allPlans = [];

async function loadPlans() {
    try {
        const response = await fetch(API_URL);
        allPlans = await response.json();
        
        const filteredPlans = allPlans.filter(plan => plan.type === planType);
        
        document.getElementById('loadingMessage').classList.add('hidden');
        document.getElementById('planContainer').classList.remove('hidden');
        
        displayPlans(filteredPlans);
    } catch (error) {
        console.error('Error fetching plans:', error);
        allPlans = [
            { id: '1', type: 'prepaid', price: 199, validity: '28 days', data: '1.5GB/day', description: 'Unlimited calls + 100 SMS/day' },
            { id: '2', type: 'prepaid', price: 299, validity: '28 days', data: '2GB/day', description: 'Unlimited calls + 100 SMS/day' },
            { id: '3', type: 'prepaid', price: 399, validity: '56 days', data: '2GB/day', description: 'Unlimited calls + 100 SMS/day' },
            { id: '4', type: 'prepaid', price: 499, validity: '84 days', data: '1.5GB/day', description: 'Unlimited calls + 100 SMS/day' },
            { id: '5', type: 'postpaid', price: 399, validity: '30 days', data: 'Unlimited', description: 'Unlimited calls + 100 SMS/day' },
            { id: '6', type: 'postpaid', price: 599, validity: '30 days', data: 'Unlimited', description: 'Unlimited calls + 100 SMS/day + Netflix' },
            { id: '7', type: 'postpaid', price: 799, validity: '30 days', data: 'Unlimited', description: 'Unlimited calls + 100 SMS/day + Netflix + Prime' }
        ];
        const filteredPlans = allPlans.filter(plan => plan.type === planType);
        document.getElementById('loadingMessage').classList.add('hidden');
        document.getElementById('planContainer').classList.remove('hidden');
        displayPlans(filteredPlans);
    }
}

function selectPlan(planId) {
    const plan = allPlans.find(p => p.id === planId);
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Operator:</strong> ${operator.toUpperCase()}</p>
        <p><strong>Plan:</strong> ₹${plan.price}</p>
        <p><strong>Validity:</strong> ${plan.validity}</p>
        <p><strong>Data:</strong> ${plan.data}</p>
        <p class="mt-2 text-lg font-bold">Total: ₹${plan.price}</p>
    `;
    
    modal.classList.remove('hidden');
    
    document.getElementById('confirmBtn').onclick = function() {
        const history = JSON.parse(localStorage.getItem('rechargeHistory')) || [];
        history.unshift({ number: mobile, operator: operator, amount: plan.price, status: 'Success' });
        localStorage.setItem('rechargeHistory', JSON.stringify(history));
        alert('Recharge Successful!');
        window.location.href = 'dashboard.html';
    };
}

document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});

loadPlans();
