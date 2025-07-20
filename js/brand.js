  const models = [
    { name: 'R15 V4', brand: 'Yamaha', price: '৳525,000', img: 'images/Dealer/dealer-bg.jpg', link: 'bike.html?model=r15-v4', category: 'Sports Bike' },
    { name: 'FZS V3 ABS', brand: 'Yamaha', price: '৳275,000', img: 'images/fzs-v3.jpg', link: 'bike.html?model=fzs-v3', category: 'Sports Bike' },
    { name: 'CBR 150R', brand: 'Honda', price: '৳480,000', img: 'images/cbr150r.jpg', link: 'bike.html?model=cbr150r', category: 'Sports Bike' },
    { name: 'Gixxer SF', brand: 'Suzuki', price: '৳319,950', img: 'images/gixxer-sf.jpg', link: 'bike.html?model=gixxer-sf', category: 'Sports Bike' },
    { name: 'Apache RTR 160', brand: 'TVS', price: '৳197,999', img: 'images/apache-160.jpg', link: 'bike.html?model=apache-160', category: 'Sports Bike' },
    { name: 'Pulsar N160', brand: 'Bajaj', price: '৳289,900', img: 'images/pulsar-n160.jpg', link: 'bike.html?model=pulsar-n160', category: 'Sports Bike' },
    { name: 'Knight Rider V2', brand: 'Runner', price: '৳140,000', img: 'images/knight-rider.jpg', link: 'bike.html?model=knight-rider', category: 'Sports Bike' },
    { name: 'KPR 150', brand: 'Lifan', price: '৳210,000', img: 'images/kpr150.jpg', link: 'bike.html?model=kpr150', category: 'Sports Bike' },
    { name: 'RC 125', brand: 'KTM', price: '৳635,000', img: 'images/rc125.jpg', link: 'bike.html?model=rc125', category: 'Sports Bike' }
  ];

  function renderModels(brand = "All") {
    const container = document.getElementById("modelList");
    container.innerHTML = "";
    const filtered = brand === "All" ? models : models.filter(m => m.brand === brand);
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
    renderModels(selectedBrand);
  }

  renderModels();