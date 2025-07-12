  const outletData = [];

    const brands = ["Yamaha", "Honda", "Suzuki", "Hero", "TVS", "Bajaj", "CFMoto", "Royal Enfield", "Runner Automobiles", "Walton", "Lifan", "Zontas", "Keeway", "KTM", "Benelli", "Aprilla"];
    const cities = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barishal", "Sylhet", "Rangpur", "Mymensingh", "Comilla", "Narayanganj", "Gazipur", "Bogra", "Jessore", "Dinajpur"];
    const types = ["Official", "Unofficial"];

    for (let brand of brands) {
      for (let city of cities) {
        for (let type of types) {
          for (let i = 1; i <= 6; i++) {
            outletData.push({
              brand,
              city,
              type,
              name: `${brand} ${type} Showroom ${i}`,
              address: `${city} Area ${i}`,
              phone: `01XXXXXXXX${i}`,
              map: `https://maps.google.com/?q=${encodeURIComponent(`${brand} ${city} Outlet ${i}`)}`
            });
          }
        }
      }
    }

    function showOutlets() {
      const brand = document.getElementById("brand").value;
      const city = document.getElementById("city").value;
      const preference = document.getElementById("preference").value;
      const result = document.getElementById("result");

      if (!brand || !city || !preference) {
        result.innerHTML = "<p>Please select all fields.</p>";
        return;
      }

      const matches = outletData.filter(o =>
        o.brand === brand && o.city === city && o.type === preference
      );

      if (matches.length === 0) {
        result.innerHTML = "<p>No outlets found for this selection.</p>";
        return;
      }

      result.innerHTML = matches.map(o =>
        `<div class="outlet">
          <strong>${o.name}</strong><br/>
          Address: ${o.address}<br/>
          Phone: ${o.phone}<br/>
          <a href="${o.map}" target="_blank">View on Google Maps</a>
        </div>`
      ).join("");
      document.querySelector('.result-container').style.display = 'block';
    }