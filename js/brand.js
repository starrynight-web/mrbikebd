  const models = [
    { name: 'R15 V4', brand: 'Yamaha', price: '৳525,000', img: 'images/Dealer/dealer-bg.jpg', link: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986349/bikes/royal-enfield/hunter/royal-enfield-hunter-350-royal-blue-back-view.webp', category: 'Sports Bike' },
    { name: 'FZS V3 ABS', brand: 'Yamaha', price: '৳275,000', img: 'images/fzs-v3.jpg', link: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986350/bikes/royal-enfield/hunter/royal-enfield-hunter-350-royal-blue-front-view.webp', category: 'Sports Bike' },
    { name: 'CBR 150R', brand: 'Honda', price: '৳480,000', img: 'images/cbr150r.jpg', link: 'bike.html?model=cbr150r', category: 'Sports Bike' },
    { name: 'Gixxer SF', brand: 'Suzuki', price: '৳319,950', img: 'images/gixxer-sf.jpg', link: 'bike.html?model=gixxer-sf', category: 'Sports Bike' },
    { name: 'Apache RTR 160', brand: 'TVS', price: '৳197,999', img: 'images/apache-160.jpg', link: 'bike.html?model=apache-160', category: 'Sports Bike' },
    { name: 'Pulsar N160', brand: 'Bajaj', price: '৳289,900', img: 'images/pulsar-n160.jpg', link: 'bike.html?model=pulsar-n160', category: 'Sports Bike' },
    { name: 'Knight Rider V2', brand: 'Runner', price: '৳140,000', img: 'images/knight-rider.jpg', link: 'bike.html?model=knight-rider', category: 'Sports Bike' },
    { name: 'KPR 150', brand: 'Lifan', price: '৳210,000', img: 'images/kpr150.jpg', link: 'bike.html?model=kpr150', category: 'Sports Bike' },
    { name: 'RC 125', brand: 'KTM', price: '৳635,000', img: 'images/rc125.jpg', link: 'bike.html?model=rc125', category: 'Sports Bike' }
  ];

  function renderModels(brand = "All", category = "All") {
    const container = document.getElementById("modelList");
    container.innerHTML = "";
    const filtered = models.filter(m => {
      const brandMatch = (brand === "All" || m.brand === brand);
      const categoryMatch = (category === "All" || m.category === category);
      return brandMatch && categoryMatch;
    });
    filtered.forEach(m => {
      container.innerHTML += `
        <div class="model-card">
          <img src="${m.img}" alt="${m.name}">
          <div class="card-content">
            <h4>${m.name}</h4>
            <p><strong>Brand:</strong> ${m.brand}</p>
            <p><strong>Price:</strong> ${m.price}</p>
            <p><strong>Category:</strong> ${m.category}</p>
            <a href="${m.link}" class="view-more-btn">View More</a>
          </div>
        </div>
      `;
    });
  }

  function filterModels() {
    const selectedBrand = document.getElementById("brandFilter").value;
    const selectedCategory = document.getElementById("categoryFilter").value;
    renderModels(selectedBrand, selectedCategory);
  }

  function setFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('brand');
    const category = params.get('category');
    const brandFilter = document.getElementById("brandFilter");
    const categoryFilter = document.getElementById("categoryFilter");
  
    // Set brand filter if present
    if (brand) {
      for (let i = 0; i < brandFilter.options.length; i++) {
        if (brandFilter.options[i].value.toLowerCase() === brand.toLowerCase()) {
          brandFilter.selectedIndex = i;
          break;
        }
      }
    }
  
    // Set category filter if present
    if (category) {
      for (let i = 0; i < categoryFilter.options.length; i++) {
        if (categoryFilter.options[i].value.toLowerCase() === category.toLowerCase()) {
          categoryFilter.selectedIndex = i;
          break;
        }
      }
    }
  
    // Render models with the selected filters
    renderModels(
      brandFilter.value,
      categoryFilter.value
    );
  }
  
  // When the page loads, set the filters if present in the URL
  window.addEventListener('DOMContentLoaded', setFiltersFromURL);
  
  // Also update filterModels to always use the dropdowns
  function filterModels() {
    const selectedBrand = document.getElementById("brandFilter").value;
    const selectedCategory = document.getElementById("categoryFilter").value;
    renderModels(selectedBrand, selectedCategory);
  }