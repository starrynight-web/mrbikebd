// Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add scroll effect for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Add some interactive effects
    document.querySelectorAll('.bike-card, .brand-card, .news-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('bike-card') ? 
          'translateY(-10px) scale(1.02)' : 'translateY(-5px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Add click handlers for interactive elements
    // document.querySelectorAll('.brand-card').forEach(card => {
    //   card.addEventListener('click', function() {
    //     const brandName = this.querySelector('.brand-name').textContent;
    //     alert(`Redirecting to ${brandName} bikes...`);
    //   });
    // });

    // Counter animation for stats
    function animateCounters() {
      const counters = document.querySelectorAll('.stat-number');
      
      counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current) + counter.textContent.replace(/[\d]/g, '').replace(/^\d+/, '');
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = counter.textContent.replace(/^\d+/, target);
          }
        };
        
        // Start animation when element is visible
        const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              updateCounter();
              counterObserver.unobserve(entry.target);
            }
          });
        });
        
        counterObserver.observe(counter);
      });
    }

    // Initialize counter animation
    animateCounters();

    // Assign unique classes to bike-scrolls for targeting
    window.addEventListener('DOMContentLoaded', () => {
      const bikeScrolls = document.querySelectorAll('.bike-scroll');
      if (bikeScrolls[0]) bikeScrolls[0].classList.add('bike-scroll-bikes');
      if (bikeScrolls[1]) bikeScrolls[1].classList.add('bike-scroll-trending');
    });

    // Scroll function for navigation arrows
    function scrollBikeSection(section, direction) {
      let scrollContainer;
      if (section === 'bikes') {
        scrollContainer = document.querySelector('.bike-scroll-bikes');
      } else if (section === 'trending') {
        scrollContainer = document.querySelector('.bike-scroll-trending');
      }
      if (scrollContainer) {
        const scrollAmount = scrollContainer.offsetWidth * 0.8; // scroll by 80% of visible width
        scrollContainer.scrollBy({
          left: direction * scrollAmount,
          behavior: 'smooth'
        });
      }
    }
    