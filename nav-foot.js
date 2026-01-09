/**
 * BikeBD Navigation and Footer Component
 * Reusable navbar and footer that can be injected into any page
 */

// Inject CSS styles for navbar and footer
function injectNavFootStyles() {
    const styleElement = document.createElement('style');
    styleElement.id = 'nav-foot-styles';
    styleElement.textContent = `
        /* Custom styles for smooth transitions and effects */
        .hamburger-line {
            transition: all 0.3s ease;
        }
        
        .hamburger.active .hamburger-line:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .hamburger.active .hamburger-line:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .hamburger-line:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
        
        .mobile-menu {
            transition: all 0.3s ease;
            max-height: 0;
            overflow: hidden;
        }
        
        .mobile-menu.active {
            max-height: 300px;
        }
        
        /* Styling for the faded clickable logo */
        .faded-logo {
            opacity: 0.5;
            transition: opacity 0.3s;
        }
        
        .faded-logo:hover {
            opacity: 0.8;
        }
        
        /* Footer social icons */
        .social-icon {
            transition: all 0.3s ease;
        }
        
        .social-icon:hover {
            transform: translateY(-3px);
        }
        
        .social-facebook:hover {
            background-color: #1877f2;
            color: white;
        }
        
        .social-youtube:hover {
            background-color: #ff0000;
            color: white;
        }
        
        .social-instagram:hover {
            background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
            color: white;
        }
        
        .social-twitter:hover {
            background-color: #1da1f2;
            color: white;
        }
        
        .social-linkedin:hover {
            background-color: #0077b5;
            color: white;
        }
        
        /* Footer link hover effect */
        .footer-link {
            transition: all 0.2s ease;
        }
        
        .footer-link:hover {
            color: #3b82f6;
            transform: translateX(3px);
        }
        
        /* Newsletter input focus */
        .newsletter-input:focus {
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        
        /* Back to top button */
        .back-to-top {
            transition: all 0.3s ease;
        }
        
        .back-to-top:hover {
            background-color: #3b82f6;
            color: white;
            transform: translateY(-3px);
        }
    `;
    
    // Only inject if not already present
    if (!document.getElementById('nav-foot-styles')) {
        document.head.appendChild(styleElement);
    }
}

// Get navbar HTML template
function getNavbarHTML() {
    return `
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 bg-white shadow-md">
        <div class="container mx-auto px-4 py-3">
            <div class="flex items-center justify-between">
                <!-- Left side: Hamburger menu and logos -->
                <div class="flex items-center space-x-4">
                    <!-- Hamburger menu - Now persistent on all screen sizes -->
                    <button id="hamburger" class="hamburger flex flex-col justify-center items-center w-8 h-8 space-y-1.5">
                        <span class="hamburger-line w-6 h-0.5 bg-gray-800"></span>
                        <span class="hamburger-line w-6 h-0.5 bg-gray-800"></span>
                        <span class="hamburger-line w-6 h-0.5 bg-gray-800"></span>
                    </button>
                    
                    <!-- Main logo -->
                    <div class="flex items-center">
                        <div class="text-2xl font-bold text-blue-700">
                            <i class="fas fa-motorcycle mr-1"></i> BikeBD
                        </div>
                        
                        <!-- Faded clickable logo (single character) -->
                        <a href="#" class="faded-logo ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-lg">
                            B
                        </a>
                    </div>
                </div>
                
                <!-- Right side: Search bar and profile icon -->
                <div class="flex items-center space-x-4">
                    <!-- Search bar - hidden on small screens (now hamburger is always visible) -->
                    <div class="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                        <i class="fas fa-search text-gray-500 mr-2"></i>
                        <input type="text" placeholder="Search bikes, brands, dealers..." class="bg-transparent outline-none w-64">
                    </div>
                    
                    <!-- Search icon for mobile -->
                    <button id="mobile-search-toggle" class="md:hidden text-gray-600 hover:text-blue-700">
                        <i class="fas fa-search text-xl"></i>
                    </button>
                    
                    <!-- Profile icon -->
                    <div class="relative">
                        <button class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                            <i class="fas fa-user text-lg"></i>
                        </button>
                        <!-- Profile dropdown (hidden by default) -->
                        <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden profile-dropdown z-50">
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700">My Profile</a>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700">Saved Bikes</a>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700">Settings</a>
                            <hr class="my-2">
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Mobile search bar (hidden by default) -->
            <div id="mobile-search" class="mt-3 hidden">
                <div class="flex items-center bg-gray-100 rounded-full px-4 py-3">
                    <i class="fas fa-search text-gray-500 mr-2"></i>
                    <input type="text" placeholder="Search bikes, brands, dealers..." class="bg-transparent outline-none w-full">
                </div>
            </div>
            
            <!-- Mobile menu (hidden by default) -->
            <div id="mobile-menu" class="mobile-menu mt-3">
                <div class="flex flex-col space-y-3 py-3">
                    <a href="#" class="text-gray-800 hover:text-blue-700 font-medium py-2">Home</a>
                    <a href="#" class="text-gray-800 hover:text-blue-700 font-medium py-2">Bikes</a>
                    <a href="#" class="text-gray-800 hover:text-blue-700 font-medium py-2">Brands</a>
                    <a href="#" class="text-gray-800 hover:text-blue-700 font-medium py-2">Dealers</a>
                    <a href="#" class="text-gray-800 hover:text-blue-700 font-medium py-2">News</a>
                    <a href="#" class="text-gray-800 hover:text-blue-700 font-medium py-2">Compare</a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

// Get footer HTML template
function getFooterHTML() {
    return `
    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-12 pb-6">
        <div class="container mx-auto px-4">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <!-- Column 1: Brand Info -->
                <div>
                    <div class="flex items-center mb-4">
                        <div class="text-2xl font-bold text-white">
                            <i class="fas fa-motorcycle mr-2 text-blue-400"></i> BikeBD
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6 text-sm leading-relaxed">
                        Your ultimate destination for motorcycles in Bangladesh. Find the latest bikes, compare prices, read reviews, and connect with dealers nationwide.
                    </p>
                    
                    <!-- Social Media Links -->
                    <div class="mb-6">
                        <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
                        <div class="flex space-x-3">
                            <a href="#" class="social-icon social-facebook w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition duration-300">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon social-youtube w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition duration-300">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="#" class="social-icon social-instagram w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition duration-300">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="social-icon social-twitter w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition duration-300">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon social-linkedin w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition duration-300">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Column 2: Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
                    <ul class="space-y-3">
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
                                Featured Bikes
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
                                Compare Bikes
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
                                Latest News
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
                                Expert Reviews
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
                                Bike Videos
                            </a>
                        </li>
                    </ul>
                </div>
                
                <!-- Column 3: Popular Brands -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Popular Brands</h4>
                    <ul class="space-y-3">
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-motorcycle text-xs mr-2 text-blue-500"></i>
                                Honda
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-motorcycle text-xs mr-2 text-blue-500"></i>
                                Yamaha
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-motorcycle text-xs mr-2 text-blue-500"></i>
                                Suzuki
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-motorcycle text-xs mr-2 text-blue-500"></i>
                                Bajaj
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-motorcycle text-xs mr-2 text-blue-500"></i>
                                TVS
                            </a>
                        </li>
                        <li>
                            <a href="#" class="footer-link text-gray-400 hover:text-blue-400 flex items-center">
                                <i class="fas fa-motorcycle text-xs mr-2 text-blue-500"></i>
                                Royal Enfield
                            </a>
                        </li>
                    </ul>
                </div>
                
                <!-- Column 4: Newsletter -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Stay Updated</h4>
                    <p class="text-gray-400 mb-4 text-sm">
                        Subscribe to our newsletter for the latest bike launches, reviews, and offers.
                    </p>
                    
                    <form class="mb-6">
                        <div class="flex flex-col space-y-3">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                class="newsletter-input bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition duration-300"
                            >
                            <button 
                                type="submit" 
                                class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300 flex items-center justify-center"
                            >
                                <i class="fas fa-paper-plane mr-2"></i>
                                Subscribe
                            </button>
                        </div>
                    </form>
                    
                    <!-- Contact Info -->
                    <div class="space-y-3">
                        <div class="flex items-center text-gray-400">
                            <i class="fas fa-envelope mr-3 text-blue-500"></i>
                            <span>info@bikebd.com</span>
                        </div>
                        <div class="flex items-center text-gray-400">
                            <i class="fas fa-phone mr-3 text-blue-500"></i>
                            <span>+880 1XXX-XXXXXX</span>
                        </div>
                        <div class="flex items-center text-gray-400">
                            <i class="fas fa-map-marker-alt mr-3 text-blue-500"></i>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Divider -->
            <hr class="border-gray-800 my-8">
            
            <!-- Bottom Footer -->
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <p class="text-gray-500 text-sm">
                        &copy; 2024 BikeBD. All rights reserved.
                    </p>
                </div>
                
                <div class="flex flex-wrap justify-center space-x-6">
                    <a href="#" class="text-gray-500 hover:text-blue-400 text-sm transition duration-300">
                        Privacy Policy
                    </a>
                    <a href="#" class="text-gray-500 hover:text-blue-400 text-sm transition duration-300">
                        Terms of Service
                    </a>
                    <a href="#" class="text-gray-500 hover:text-blue-400 text-sm transition duration-300">
                        Cookie Policy
                    </a>
                    <a href="#" class="text-gray-500 hover:text-blue-400 text-sm transition duration-300">
                        Disclaimer
                    </a>
                </div>
            </div>
            
            <!-- Back to Top Button -->
            <div class="mt-8 text-center">
                <button id="back-to-top" class="back-to-top inline-flex items-center text-gray-400 hover:text-white border border-gray-700 hover:border-blue-500 rounded-full px-5 py-2 transition duration-300">
                    <i class="fas fa-arrow-up mr-2"></i>
                    Back to Top
                </button>
            </div>
        </div>
    </footer>
    `;
}

// Attach event handlers for navbar and footer interactions
function attachEventHandlers() {
    // Get DOM elements
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileSearch = document.getElementById('mobile-search');
    const searchIcon = document.getElementById('mobile-search-toggle');
    const profileIcon = document.querySelector('.relative button');
    const profileDropdown = document.querySelector('.profile-dropdown');
    const backToTopButton = document.getElementById('back-to-top');
    const fadedLogo = document.querySelector('.faded-logo');
    
    // Toggle mobile menu
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Close mobile search if open
            if (mobileSearch && !mobileSearch.classList.contains('hidden')) {
                mobileSearch.classList.add('hidden');
            }
        });
    }
    
    // Toggle mobile search
    if (searchIcon && mobileSearch) {
        searchIcon.addEventListener('click', function() {
            mobileSearch.classList.toggle('hidden');
            
            // Close mobile menu if open
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
    
    // Toggle profile dropdown
    if (profileIcon && profileDropdown) {
        profileIcon.addEventListener('click', function() {
            profileDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
                profileDropdown.classList.add('hidden');
            }
        });
    }
    
    // Faded logo click event
    if (fadedLogo) {
        fadedLogo.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Faded logo clicked!');
        });
    }
    
    // Back to top button functionality
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Mobile search input functionality
    const mobileSearchInput = document.querySelector('#mobile-search input');
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                    this.value = '';
                    if (mobileSearch) {
                        mobileSearch.classList.add('hidden');
                    }
                }
            }
        });
    }
    
    // Desktop search input functionality
    const desktopSearchInput = document.querySelector('.hidden.md\\:flex input');
    if (desktopSearchInput) {
        desktopSearchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                }
            }
        });
    }
}

// Main initialization function
function initNavFootComponents() {
    // Inject styles first
    injectNavFootStyles();
    
    // Inject navbar
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = getNavbarHTML();
    }
    
    // Inject footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = getFooterHTML();
    }
    
    // Wait for DOM to be ready before attaching event handlers
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachEventHandlers);
    } else {
        // DOM is already ready
        attachEventHandlers();
    }
}

// Auto-initialize when script loads
initNavFootComponents();
