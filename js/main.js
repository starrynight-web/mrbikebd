 function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
    }

    // Optional: close sidebar when clicking outside
    window.addEventListener('click', function (e) {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.querySelector('.hamburger');

      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    });

// Sample bike database for search functionality
const bikeDatabase = {
  bikes: [
    {
      id: 1,
      name: "Yamaha R15 V4",
      brand: "Yamaha",
      category: "Sport Bikes",
      engine: "155cc",
      price: "৳ 5,25,000",
      type: "bikes",
      icon: "🏍️"
    },
    {
      id: 2,
      name: "Honda CBR 150R",
      brand: "Honda",
      category: "Sport Bikes",
      engine: "149cc",
      price: "৳ 5,50,000",
      type: "bikes",
      icon: "🏍️"
    },
    {
      id: 3,
      name: "Suzuki Gixxer SF",
      brand: "Suzuki",
      category: "Sport Bikes",
      engine: "155cc",
      price: "৳ 3,50,000",
      type: "bikes",
      icon: "🏍️"
    },
    {
      id: 4,
      name: "TVS Apache RR 310",
      brand: "TVS",
      category: "Sport Bikes",
      engine: "312cc",
      price: "৳ 6,75,000",
      type: "bikes",
      icon: "🏍️"
    },
    {
      id: 5,
      name: "KTM RC 125",
      brand: "KTM",
      category: "Sport Bikes",
      engine: "124cc",
      price: "৳ 4,50,000",
      type: "bikes",
      icon: "🏍️"
    },
    {
      id: 6,
      name: "Hero Xtreme 160R",
      brand: "Hero",
      category: "Naked Bikes",
      engine: "163cc",
      price: "৳ 2,85,000",
      type: "bikes",
      icon: "🏍️"
    },
    {
      id: 7,
      name: "Bajaj Pulsar N250",
      brand: "Bajaj",
      category: "Naked Bikes",
      engine: "249cc",
      price: "৳ 4,75,000",
      type: "bikes",
      icon: "🏍️"
    },
    {
      id: 8,
      name: "Royal Enfield Classic 350",
      brand: "Royal Enfield",
      category: "Cruisers",
      engine: "349cc",
      price: "৳ 6,25,000",
      type: "bikes",
      icon: "🏍️"
    },
    {
      id: 9,
      name: "Lifan KPR 165",
      brand: "Lifan",
      category: "Sport Bikes",
      engine: "162cc",
      price: "৳ 3,95,000",
      type: "bikes",
      icon: "🏍️"
    },
    {
      id: 10,
      name: "Zontes ZT 155 G1",
      brand: "Zontes",
      category: "Naked Bikes",
      engine: "155cc",
      price: "৳ 4,15,000",
      type: "bikes",
      icon: "🏍️"
    }
  ],
  brands: [
    {
      id: 1,
      name: "Royal Enfield",
      models: 12,
      type: "brands",
      icon: "🏭"
    },
    {
      id: 2,
      name: "Honda",
      models: 25,
      type: "brands",
      icon: "🏭"
    },
    {
      id: 3,
      name: "Bajaj",
      models: 18,
      type: "brands",
      icon: "🏭"
    },
    {
      id: 4,
      name: "TVS",
      models: 15,
      type: "brands",
      icon: "🏭"
    },
    {
      id: 5,
      name: "Yamaha",
      models: 20,
      type: "brands",
      icon: "🏭"
    },
    {
      id: 6,
      name: "Hero",
      models: 22,
      type: "brands",
      icon: "🏭"
    },
    {
      id: 7,
      name: "KTM",
      models: 8,
      type: "brands",
      icon: "🏭"
    },
    {
      id: 8,
      name: "Suzuki",
      models: 16,
      type: "brands",
      icon: "🏭"
    }
  ]
};

// Search functionality
class DynamicSearch {
  constructor() {
    this.searchInput = document.getElementById('searchInput');
    this.searchSuggestions = document.getElementById('searchSuggestions');
    this.suggestionsList = document.getElementById('suggestionsList');
    this.categoryTags = document.querySelectorAll('.category-tag');
    this.currentCategory = 'all';
    this.selectedIndex = -1;
    this.filteredResults = [];
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupCategoryFilters();
  }

  setupEventListeners() {
    // Search input events
    this.searchInput.addEventListener('input', (e) => {
      this.handleSearch(e.target.value);
    });

    this.searchInput.addEventListener('focus', () => {
      if (!this.searchInput.value.trim()) {
        this.showPopularItems();
      }
      this.showSuggestions();
    });

    this.searchInput.addEventListener('keydown', (e) => {
      this.handleKeyNavigation(e);
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!this.searchInput.contains(e.target) && !this.searchSuggestions.contains(e.target)) {
        this.hideSuggestions();
      }
    });

    // Prevent form submission on enter
    this.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.selectCurrentItem();
      }
    });
  }

  setupCategoryFilters() {
    this.categoryTags.forEach(tag => {
      tag.addEventListener('click', () => {
        // Remove active class from all tags
        this.categoryTags.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tag
        tag.classList.add('active');
        this.currentCategory = tag.dataset.category;
        
        // Re-filter results with new category
        this.handleSearch(this.searchInput.value);
      });
    });
  }

  handleSearch(query) {
    if (!query.trim()) {
      this.showPopularItems();
      return;
    }

    this.filteredResults = this.searchDatabase(query, this.currentCategory);
    this.renderSuggestions();
    this.showSuggestions();
  }

  searchDatabase(query, category) {
    const searchTerm = query.toLowerCase();
    let results = [];

    if (category === 'all' || category === 'bikes') {
      results.push(...bikeDatabase.bikes.filter(bike => 
        bike.name.toLowerCase().includes(searchTerm) ||
        bike.brand.toLowerCase().includes(searchTerm) ||
        bike.category.toLowerCase().includes(searchTerm) ||
        bike.engine.toLowerCase().includes(searchTerm)
      ));
    }

    if (category === 'all' || category === 'brands') {
      results.push(...bikeDatabase.brands.filter(brand => 
        brand.name.toLowerCase().includes(searchTerm)
      ));
    }

    // Do not include dealers
    return results.slice(0, 8); // Limit to 8 results
  }

  showPopularItems() {
    this.filteredResults = [
      ...bikeDatabase.bikes.slice(0, 3),
      ...bikeDatabase.brands.slice(0, 2)
    ];
    this.renderSuggestions();
  }

  renderSuggestions() {
    if (this.filteredResults.length === 0) {
      this.suggestionsList.innerHTML = '<div class="no-results">No results found</div>';
      return;
    }

    this.suggestionsList.innerHTML = this.filteredResults.map((item, index) => {
      // Only show name for bikes and brands
      return `
        <div class="suggestion-item" data-index="${index}" data-type="${item.type}" data-id="${item.id}">
          <div class="suggestion-content">
            <div class="suggestion-title">${item.name}</div>
          </div>
        </div>
      `;
    }).join('');

    // Add click listeners to suggestion items
    this.suggestionsList.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        this.handleSuggestionClick(item);
      });

      item.addEventListener('mouseenter', () => {
        this.selectedIndex = parseInt(item.dataset.index);
        this.updateSelection();
      });
    });
  }

  handleKeyNavigation(e) {
    const items = this.suggestionsList.querySelectorAll('.suggestion-item');
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
        this.updateSelection();
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        this.updateSelection();
        break;
      case 'Escape':
        this.hideSuggestions();
        this.searchInput.blur();
        break;
    }
  }

  updateSelection() {
    const items = this.suggestionsList.querySelectorAll('.suggestion-item');
    
    items.forEach((item, index) => {
      item.classList.toggle('selected', index === this.selectedIndex);
    });

    // Scroll to selected item if needed
    if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
      items[this.selectedIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  selectCurrentItem() {
    if (this.selectedIndex >= 0 && this.filteredResults[this.selectedIndex]) {
      const selectedItem = this.filteredResults[this.selectedIndex];
      this.handleSuggestionClick(selectedItem);
    }
  }

  handleSuggestionClick(item) {
    const itemData = typeof item === 'object' && item.dataset ? 
      this.filteredResults[parseInt(item.dataset.index)] : item;

    if (!itemData) return;

    // Update search input with selected item
    this.searchInput.value = itemData.name;
    this.hideSuggestions();

    // Handle navigation based on item type
    switch (itemData.type) {
      case 'bikes':
        // Navigate to bike details page
        window.location.href = `bike.html?bike=${itemData.id}`;
        break;
      case 'brands':
        // Navigate to brand page
        window.location.href = `brand.html?brand=${itemData.name.toLowerCase().replace(/\s+/g, '-')}`;
        break;
    }
  }

  showSuggestions() {
    this.searchSuggestions.classList.add('active');
  }

  hideSuggestions() {
    this.searchSuggestions.classList.remove('active');
    this.selectedIndex = -1;
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new DynamicSearch();
});    