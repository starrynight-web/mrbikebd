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
        document.addEventListener('DOMContentLoaded', function() {
            const starContainers = document.querySelectorAll('.category-stars');
            
            starContainers.forEach(container => {
                const stars = container.querySelectorAll('.star');
                const category = container.getAttribute('data-category');
                const categoryScore = container.parentElement.querySelector('.category-score');
                
                stars.forEach(star => {
                    star.addEventListener('click', function() {
                        const rating = parseInt(this.getAttribute('data-rating'));
                        
                        // Reset all stars in this category
                        stars.forEach(s => s.classList.remove('active'));
                        
                        // Activate stars up to the clicked one
                        for (let i = 0; i < rating; i++) {
                            stars[i].classList.add('active');
                        }
                        
                        // Update category score
                        categoryScore.textContent = `${rating}/5`;
                        
                        // Store the rating
                        localStorage.setItem(`rating_${category}`, rating);
                    });
                    
                    // Hover effect
                    star.addEventListener('mouseenter', function() {
                        const rating = parseInt(this.getAttribute('data-rating'));
                        
                        stars.forEach((s, index) => {
                            if (index < rating) {
                                s.style.color = '#F97316';
                            } else {
                                s.style.color = '#D6CCC2';
                            }
                        });
                    });
                });
                
                // Reset hover effect when leaving the star container
                container.addEventListener('mouseleave', function() {
                    stars.forEach(star => {
                        if (star.classList.contains('active')) {
                            star.style.color = '#F97316';
                        } else {
                            star.style.color = '#D6CCC2';
                        }
                    });
                });
            });
        });

        // Submit Review Function
        function submitReview() {
            const categories = ['design', 'performance', 'price', 'braking', 'reliability', 'speed', 'mileage', 'comfort'];
            const ratings = {};
            let hasRating = false;
            
            categories.forEach(category => {
                const container = document.querySelector(`[data-category="${category}"]`);
                const activeStars = container.querySelectorAll('.star.active');
                ratings[category] = activeStars.length;
                if (activeStars.length > 0) hasRating = true;
            });
            
            if (!hasRating) {
                alert('Please rate at least one category before submitting your review.');
                return;
            }

            // Calculate average rating
            const totalRating = Object.values(ratings).reduce((sum, rating) => sum + rating, 0);
            const averageRating = (totalRating / Object.keys(ratings).length).toFixed(1);
            
            // Show success message
            alert(`Thank you for your review!\nAverage Rating: ${averageRating}/5\n\nYour ratings have been submitted successfully.`);
            
            // Reset all ratings
            document.querySelectorAll('.category-stars').forEach(container => {
                container.querySelectorAll('.star').forEach(star => {
                    star.classList.remove('active');
                    star.style.color = '#D6CCC2';
                });
                container.parentElement.querySelector('.category-score').textContent = '0/5';

                container.parentElement.querySelector('.category-score').textContent = '0/5';
            });
        }