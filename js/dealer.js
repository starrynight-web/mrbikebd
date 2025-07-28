 const brandSelect = document.getElementById('brandSelect');
    const citySelect = document.getElementById('citySelect');
    const mapFrame = document.getElementById('mapFrame');
    const mapPlaceholder = document.getElementById('mapPlaceholder');
    const loader = document.getElementById('loader');

    function updateMap() {
      const brand = brandSelect.value;
      const city = citySelect.value;

      if (brand && city) {
        // Show loader and hide placeholder
        loader.classList.add('active');
        mapPlaceholder.style.display = 'none';
        mapFrame.style.display = 'none';
        
        const query = `${brand} bike dealer in ${city}`;
        const url = `https://www.google.com/maps/embed/v1/search?q=${encodeURIComponent(query)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
        
        // Set the iframe source
        mapFrame.src = url;
        mapFrame.style.display = 'block';
        
        // Hide loader when map loads
        mapFrame.onload = function() {
          loader.classList.remove('active');
        };
        
        // Fallback in case iframe fails to load
        setTimeout(() => {
          loader.classList.remove('active');
        }, 5000);
      } else {
        // Reset state if selections are incomplete
        mapFrame.src = "";
        mapFrame.style.display = 'none';
        mapPlaceholder.style.display = 'flex';
        loader.classList.remove('active');
      }
    }

    // Add event listeners
    brandSelect.addEventListener('change', updateMap);
    citySelect.addEventListener('change', updateMap);