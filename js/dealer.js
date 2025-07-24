// Sample outlet data - in a real application, this would come from a database
const outletData = {
    'royal-enfield': {
        'dhaka': [
            { name: 'Royal Enfield Dhaka Central', address: 'House 123, Road 12, Banani, Dhaka', phone: '+880 1712-345678', type: 'official', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Royal Enfield Gulshan', address: 'House 456, Road 27, Gulshan-2, Dhaka', phone: '+880 1812-345679', type: 'official', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Royal Enfield Dhanmondi', address: 'House 789, Road 8, Dhanmondi, Dhaka', phone: '+880 1912-345680', type: 'official', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Royal Enfield Uttara', address: 'House 321, Road 15, Uttara, Dhaka', phone: '+880 1612-345681', type: 'official', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Bike World Dhaka', address: 'House 654, Road 5, Mirpur, Dhaka', phone: '+880 1512-345682', type: 'unofficial', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Speed Motors Dhaka', address: 'House 987, Road 20, Mohammadpur, Dhaka', phone: '+880 1412-345683', type: 'unofficial', location: 'https://maps.google.com/?q=23.7937,90.4066' }
        ],
        'chattogram': [
            { name: 'Royal Enfield Chattogram Central', address: 'House 111, Road 3, Agrabad, Chattogram', phone: '+880 1312-345684', type: 'official', location: 'https://maps.google.com/?q=22.3419,91.8132' },
            { name: 'Royal Enfield Halishahar', address: 'House 222, Road 7, Halishahar, Chattogram', phone: '+880 1212-345685', type: 'official', location: 'https://maps.google.com/?q=22.3419,91.8132' },
            { name: 'Royal Enfield Patenga', address: 'House 333, Road 9, Patenga, Chattogram', phone: '+880 1112-345686', type: 'official', location: 'https://maps.google.com/?q=22.3419,91.8132' },
            { name: 'Royal Enfield Nasirabad', address: 'House 444, Road 11, Nasirabad, Chattogram', phone: '+880 1012-345687', type: 'official', location: 'https://maps.google.com/?q=22.3419,91.8132' },
            { name: 'Chattogram Bike Center', address: 'House 555, Road 13, Chawkbazar, Chattogram', phone: '+880 912-345688', type: 'unofficial', location: 'https://maps.google.com/?q=22.3419,91.8132' },
            { name: 'Port City Motors', address: 'House 666, Road 15, Anderkilla, Chattogram', phone: '+880 812-345689', type: 'unofficial', location: 'https://maps.google.com/?q=22.3419,91.8132' }
        ]
    },
    'honda': {
        'dhaka': [
            { name: 'Honda Dhaka Central', address: 'House 777, Road 25, Banani, Dhaka', phone: '+880 712-345690', type: 'official', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Honda Gulshan', address: 'House 888, Road 30, Gulshan-1, Dhaka', phone: '+880 612-345691', type: 'official', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Honda Dhanmondi', address: 'House 999, Road 10, Dhanmondi, Dhaka', phone: '+880 512-345692', type: 'official', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Honda Uttara', address: 'House 100, Road 18, Uttara, Dhaka', phone: '+880 412-345693', type: 'official', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Dhaka Honda Center', address: 'House 200, Road 22, Mirpur, Dhaka', phone: '+880 312-345694', type: 'unofficial', location: 'https://maps.google.com/?q=23.7937,90.4066' },
            { name: 'Capital Honda', address: 'House 300, Road 28, Mohammadpur, Dhaka', phone: '+880 212-345695', type: 'unofficial', location: 'https://maps.google.com/?q=23.7937,90.4066' }
        ]
    }
    // Add more brands and cities as needed
};

// Generate sample data for other brands and cities
function generateSampleData() {
    const brands = ['bajaj', 'tvs', 'yamaha', 'hero', 'ktm', 'suzuki', 'benelli', 'cfmoto', 'lifan', 'runner'];
    const cities = ['rajshahi', 'khulna', 'barishal', 'sylhet', 'rangpur', 'mymensingh'];
    
    brands.forEach(brand => {
        outletData[brand] = {};
        cities.forEach(city => {
            outletData[brand][city] = generateOutletsForBrandCity(brand, city);
        });
    });
}

function generateOutletsForBrandCity(brand, city) {
    const brandNames = {
        'bajaj': 'Bajaj',
        'tvs': 'TVS',
        'yamaha': 'Yamaha',
        'hero': 'Hero',
        'ktm': 'KTM',
        'suzuki': 'Suzuki',
        'benelli': 'Benelli',
        'cfmoto': 'CFMoto',
        'lifan': 'Lifan',
        'runner': 'Runner'
    };
    
    const cityNames = {
        'rajshahi': 'Rajshahi',
        'khulna': 'Khulna',
        'barishal': 'Barishal',
        'sylhet': 'Sylhet',
        'rangpur': 'Rangpur',
        'mymensingh': 'Mymensingh'
    };
    
    const outlets = [];
    
    // Generate 4 official outlets
    for (let i = 1; i <= 4; i++) {
        outlets.push({
            name: `${brandNames[brand]} ${cityNames[city]} Center ${i}`,
            address: `House ${100 + i * 50}, Road ${i * 5}, ${cityNames[city]}`,
            phone: `+880 ${1800 + i}-${100000 + i}`,
            type: 'official',
            location: `https://maps.google.com/?q=${23 + Math.random()},${90 + Math.random()}`
        });
    }
    
    // Generate 2 unofficial outlets
    for (let i = 1; i <= 2; i++) {
        outlets.push({
            name: `${cityNames[city]} ${brandNames[brand]} Motors ${i}`,
            address: `House ${200 + i * 50}, Road ${i * 8}, ${cityNames[city]}`,
            phone: `+880 ${1700 + i}-${200000 + i}`,
            type: 'unofficial',
            location: `https://maps.google.com/?q=${23 + Math.random()},${90 + Math.random()}`
        });
    }
    
    return outlets;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    generateSampleData();
    
    const searchBtn = document.getElementById('search-btn');
    const brandSelect = document.getElementById('brand-select');
    const citySelect = document.getElementById('city-select');
    const resultsSection = document.getElementById('results-section');
    const resultsContainer = document.getElementById('results-container');
    
    const mapFrame = document.getElementById('mapFrame');
    // Add event listener to search button
    searchBtn.addEventListener('click', handleSearch);
    
    // Add event listeners to dropdowns for real-time validation
    brandSelect.addEventListener('change', validateForm);
    citySelect.addEventListener('change', validateForm);
    
    function validateForm() {
        const brand = brandSelect.value;
        const city = citySelect.value;
        
        if (brand && city) {
            searchBtn.disabled = false;
            searchBtn.style.opacity = '1';
        } else {
            searchBtn.disabled = true;
            searchBtn.style.opacity = '0.6';
        }
    }
    
    function handleSearch() {
        const brand = brandSelect.value;
        const city = citySelect.value;
        
        if (!brand || !city) {
            alert('Please select both brand and city');
            return;
        }
        
       
        const searchQuery = `${brand} bike dealer in ${city} Bangladesh`;
        const encodedQuery = encodeURIComponent(searchQuery);
        const mapUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
        mapFrame.src = mapUrl;

        // Show loading state
        showLoading();
        
        // Simulate API call delay
        setTimeout(() => {
            const results = getOutlets(brand, city);
            displayResults(results);
        }, 1000);
    }
    
    function getOutlets(brand, city) {
        // Check if data exists for the selected brand and city
        if (outletData[brand] && outletData[brand][city]) {
            return outletData[brand][city];
        }
        
        // If no specific data, generate generic results
        return generateOutletsForBrandCity(brand, city);
    }
    
    function showLoading() {
        resultsSection.classList.add('show');
        resultsContainer.innerHTML = '<div class="loading">Searching for outlets...</div>';
    }
    
    function displayResults(outlets) {
        resultsContainer.innerHTML = '';
        
        if (outlets.length === 0) {
            resultsContainer.innerHTML = '<div class="loading">No outlets found for the selected criteria.</div>';
            return;
        }
        
        outlets.forEach(outlet => {
            const card = createOutletCard(outlet);
            resultsContainer.appendChild(card);
        });
    }
    
    function createOutletCard(outlet) {
        const card = document.createElement('div');
        card.className = `result-card ${outlet.type}`;
        
        const badgeClass = outlet.type === 'official' ? 'official' : 'unofficial';
        const badgeText = outlet.type === 'official' ? 'Official' : 'Unofficial';
        
        card.innerHTML = `
            <div class="card-header">
                <h3 class="showroom-name">${outlet.name}</h3>
                <span class="badge ${badgeClass}">${badgeText}</span>
            </div>
            <div class="card-content">
                <div class="info-item">
                    <div class="info-icon">📍</div>
                    <div class="info-text"><strong>Address:</strong> ${outlet.address}</div>
                </div>
                <div class="info-item">
                    <div class="info-icon">📞</div>
                    <div class="info-text"><strong>Phone:</strong> ${outlet.phone}</div>
                </div>
            </div>
            <div class="card-actions">
                <a href="${outlet.location}" target="_blank" class="action-btn btn-primary">View on Map</a>
                <a href="tel:${outlet.phone.replace(/\s/g, '')}" class="action-btn btn-secondary">Call Now</a>
            </div>
        `;
        
        return card;
    }
    
    // Initialize form validation
    validateForm();
});
