        // FAQ Toggle Function
        function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('span:last-child');
            
            answer.classList.toggle('active');
            icon.textContent = answer.classList.contains('active') ? '-' : '+';
        }

        // Image Modal Functions
        function openModal(imageSrc) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = "block";
            modalImg.src = imageSrc;
        }

        function closeModal() {
            document.getElementById('imageModal').style.display = "none";
        }

        // Close modal when clicking outside the image
        window.onclick = function(event) {
            const modal = document.getElementById('imageModal');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Enhanced Star Rating System
  const categories = [
    "Design", "Performance", "Price Value",
    "Braking", "Reliability", "Speed",
    "Mileage", "Comfort"
  ];

  const container = document.getElementById('categories');

  categories.forEach(category => {
    const div = document.createElement('div');
    div.classList.add('category-container');
    div.innerHTML = `
      <div class="category">
        <label>${category}</label>
        <div class="stars" data-category="${category.toLowerCase()}">
          ${[1, 2, 3, 4, 5].map(n => `<span class="star" data-value="${n}">★</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(div);
  });

  // Handle star click
  document.querySelectorAll('.stars').forEach(group => {
    group.addEventListener('click', e => {
      if (e.target.classList.contains('star')) {
        const value = parseInt(e.target.getAttribute('data-value'));
        const stars = group.querySelectorAll('.star');
        stars.forEach((star, i) => {
          star.classList.toggle('active', i < value);
        });
      }
    });
  });

  // Handle submit
  document.querySelector('.submit-button').addEventListener('click', () => {
    let total = 0;
    let count = 0;

    document.querySelectorAll('.stars').forEach(group => {
      const activeStars = group.querySelectorAll('.star.active').length;
      if (activeStars > 0) {
        total += activeStars;
        count++;
      }
    });

    if (count > 0) {
      const average = (total / count).toFixed(1);
      document.getElementById('average-score').textContent = `${average} ★`;
    } else {
      alert("Please rate at least one category.");
    }
  });
