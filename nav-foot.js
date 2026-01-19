/**
 * MrBike Navigation and Footer Component
 * Reusable navbar and footer that can be injected into any page
 * Supports both MrBike (New) and MrBikeRy (Used) modes
 */

(function() {
    // Determine current page mode
    const path = window.location.pathname;
    const isUsedPage = path.includes('used_index.html');
    
    // Configuration
    const C = {
        isUsed: isUsedPage,
        brandName: isUsedPage ? 'MrBikeRy' : 'MrBike',
        
        // Dynamic Classes
        logoTextColor: isUsedPage ? 'text-primary' : 'text-blue-700',
        logoIconColor: isUsedPage ? 'text-primary' : 'text-blue-700', // In index.html this was blue-400 sometimes? Let's check.
                                                                       // Original index footer: icon blue-400. Original index nav: blue-700.
                                                                       // Let's stick to base colors.
        
        // Link Colors
        linkHover: isUsedPage ? 'hover:text-primary' : 'hover:text-blue-700',
        mobileLinkHover: isUsedPage ? 'hover:text-primary' : 'hover:text-blue-700',
        
        // Buttons
        btnPrimary: isUsedPage ? 'bg-primary hover:bg-primary-dark' : 'bg-blue-600 hover:bg-blue-700',
        
        // Specific Footer Classes
        footerSocialHover: isUsedPage ? 'hover:bg-primary' : 'hover:bg-blue-600', // Facebook specific override in CSS?
        footerLinkHover: isUsedPage ? 'hover:text-primary' : 'hover:text-blue-400',
        footerIconColor: isUsedPage ? 'text-primary' : 'text-blue-500',
        newsletterFocus: isUsedPage ? 'focus:border-primary' : 'focus:border-blue-500',
        
        // Toggle logic
        toggleHref: isUsedPage ? 'index.html' : 'used_index.html',
        toggleTitle: isUsedPage ? 'Go to New Bikes' : 'Go to Used Bikes',
    };

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
                transform: rotate(45deg) translate(5px, 7px);
            }
            
            .hamburger.active .hamburger-line:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active .hamburger-line:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -6px);
            }
            
            .mobile-menu {
                position: fixed;
                top: 65px; /* Height of navbar (py-3 + content) approx */
                left: 0;
                width: 280px;
                height: calc(100vh - 72px);
                background-color: white;
                box-shadow: 2px 0 10px rgba(0,0,0,0.1);
                transform: translateX(-100%);
                transition: transform 0.3s ease-in-out;
                z-index: 40; /* Below navbar (50) */
                padding-top: 20px;
                overflow-y: auto;
            }
            
            .mobile-menu.active {
                transform: translateX(0);
            }
            
            /* Overlay for mobile menu */
            .menu-overlay {
                position: fixed;
                top: 65px; /* Starts below navbar */
                left: 0;
                width: 100%;
                height: calc(100vh - 72px);
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 30;
                display: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .menu-overlay.active {
                display: block;
                opacity: 1;
            }
            
            /* Styling for the faded clickable logo */
            .faded-logo {
                opacity: 0.5;
                transition: opacity 0.3s;
            }
            
            .faded-logo:hover {
                opacity: 0.8;
                background-color: ${isUsedPage ? '#FFF3E0' : '#DBEAFE'}; /* subtle hover bg change */
                color: ${isUsedPage ? '#FF8040' : '#1D4ED8'};
            }
            
            /* Footer social icons generic hover */
            .social-icon {
                transition: all 0.3s ease;
            }
            
            .social-icon:hover {
                transform: translateY(-3px);
            }
            
            /* Specific social colors - these override the generic hover if needed, 
               but let's keep the original logic or unify it. 
               Original index.js had specific colors. Used had generic primary.
               Let's try to respect the original design for index.html if possible, 
               or unify to primary for Used.
            */
            ${isUsedPage ? `
                .social-icon:hover { background-color: #FF8040 !important; color: white; }
            ` : `
                .social-facebook:hover { background-color: #1877f2; color: white; }
                .social-youtube:hover { background-color: #ff0000; color: white; }
                .social-instagram:hover { background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d); color: white; }
                .social-twitter:hover { background-color: #1da1f2; color: white; }
                .social-linkedin:hover { background-color: #0077b5; color: white; }
            `}
            
            /* Footer link hover effect */
            .footer-link {
                transition: all 0.2s ease;
            }
            
            .footer-link:hover {
                color: ${isUsedPage ? '#FF8040' : '#3b82f6'};
                transform: translateX(3px);
            }
            
            /* Newsletter input focus */
            .newsletter-input:focus {
                box-shadow: 0 0 0 3px ${isUsedPage ? 'rgba(255, 128, 64, 0.2)' : 'rgba(59, 130, 246, 0.2)'};
            }
            
            /* Back to top button */
            .back-to-top {
                transition: all 0.3s ease;
            }
            
            .back-to-top:hover {
                background-color: ${isUsedPage ? '#FF8040' : '#3b82f6'};
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
        // Define Left Side Extras (All Ads button for Used)
        const leftExtras = isUsedPage ? `
            <a href="#" class="ml-4 ${C.btnPrimary} text-white font-medium px-4 py-2 rounded-lg transition duration-300 hidden md:block">
                <i class="fas fa-list-alt mr-2"></i>All Ads
            </a>
        ` : '';

        // Define Right Side Extras
        let rightExtras = '';
        if (isUsedPage) {
            // Used: Search + Chat + Place Ad + Profile
            rightExtras = `
                <!-- Chat Button -->
                <button class="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                    <i class="fas fa-comments text-lg"></i>
                </button>
                
                <!-- Place Your Ad Button -->
                <button class="hidden md:flex items-center ${C.btnPrimary} text-white font-medium px-4 py-2 rounded-lg transition duration-300">
                    <i class="fas fa-plus-circle mr-2"></i>Place Your Ad
                </button>
            `;
        } else {
            // New: Search + nothing special (Profile is common)
            // Actually index.html just had Search. 
            // Wait, looking at index.html nav-foot.js...
            // It had Hamburger + Logo + Faded Logo ... Right: Search + Profile.
        }

        // Profile Icon (Common but varying colors?)
        // Index: bg-blue-100 text-blue-700
        // Used: bg-gray-100 text-gray-700 (from previous code)
        const profileBtnClass = isUsedPage 
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
            : 'bg-blue-100 text-blue-700 hover:bg-blue-200';

        // Mobile Menu Items
        let mobileMenuItems = '';
        // Common links for both modes
        const commonLinks = `
            <hr class="my-2 border-gray-200">
            <a href="compare.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-balance-scale mr-3 w-5 text-center"></i>Compare Bikes</a>
            <a href="calculator.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-calculator mr-3 w-5 text-center"></i>EMI Calculator</a>
            <a href="reg.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-id-card mr-3 w-5 text-center"></i>Reg. Guide</a>
            <a href="dealer.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-store mr-3 w-5 text-center"></i>Find Dealers</a>
            <a href="bike.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-motorcycle mr-3 w-5 text-center"></i>Bike Detail</a>
            
            <hr class="my-2 border-gray-200">
            <a href="about.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-info-circle mr-3 w-5 text-center"></i>About Us</a>
            <a href="company.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-building mr-3 w-5 text-center"></i>Our Company</a>
            <a href="contact.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-envelope mr-3 w-5 text-center"></i>Contact Us</a>
            <a href="advertise.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-ad mr-3 w-5 text-center"></i>Advertise</a>
            
            <hr class="my-2 border-gray-200">
            <a href="privacy.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-user-shield mr-3 w-5 text-center"></i>Privacy Policy</a>
            <a href="terms.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-file-contract mr-3 w-5 text-center"></i>Terms of Service</a>
        `;

        if (isUsedPage) {
            mobileMenuItems = `
                <a href="index.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-home mr-3 w-5 text-center"></i>Home</a>
                <a href="#" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-list-alt mr-3 w-5 text-center"></i>All Ads</a>
                <a href="#" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-plus-circle mr-3 w-5 text-center"></i>Place Your Ad</a>
                <a href="#" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-comments mr-3 w-5 text-center"></i>Messages</a>
                <a href="#" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-user mr-3 w-5 text-center"></i>My Account</a>
                ${commonLinks}
            `;
        } else {
            mobileMenuItems = `
                <a href="index.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-home mr-3 w-5 text-center"></i>Home</a>
                <a href="used_index.html" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-exchange-alt mr-3 w-5 text-center"></i>Used Bikes</a>
                <a href="#" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-tags mr-3 w-5 text-center"></i>Brands</a>
                <a href="#" class="text-gray-800 ${C.mobileLinkHover} font-medium py-2 flex items-center"><i class="fas fa-newspaper mr-3 w-5 text-center"></i>News</a>
                ${commonLinks}
            `;
        }

        return `
        <!-- Navbar -->
        <nav class="sticky top-0 z-50 bg-white shadow-md">
            <div class="container mx-auto px-4 py-3"> 
                <div class="flex items-center justify-between">
                    <!-- Left side: Hamburger menu and logos -->
                    <div class="flex items-center space-x-4">
                        <!-- Hamburger menu -->
                        <button id="hamburger" class="hamburger flex flex-col justify-center items-center w-8 h-8 space-y-1.5">
                            <span class="hamburger-line w-6 h-0.5 bg-gray-800"></span>
                            <span class="hamburger-line w-6 h-0.5 bg-gray-800"></span>
                            <span class="hamburger-line w-6 h-0.5 bg-gray-800"></span>
                        </button>
                        
                        <!-- Main logo -->
                        <div class="flex items-center">
                            <div class="text-2xl font-bold ${C.logoTextColor}">
                                <i class="fas fa-motorcycle mr-1"></i> ${C.brandName}
                            </div>
                            
                            <!-- Faded clickable logo (Toggle) -->
                            <a href="${C.toggleHref}" title="${C.toggleTitle}" class="faded-logo ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-lg">
                                B
                            </a>
                        </div>
                        
                        ${leftExtras}
                    </div>
                    
                    <!-- Right side: Search bar and buttons -->
                    <div class="flex items-center space-x-4">
                        <!-- Search bar - hidden on small screens -->
                        <div class="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                            <i class="fas fa-search text-gray-500 mr-2"></i>
                            <input type="text" placeholder="${isUsedPage ? 'Search used bikes...' : 'Search bikes, brands...'}" class="bg-transparent outline-none w-64">
                        </div>
                        
                        <!-- Search icon for mobile -->
                        <button id="mobile-search-toggle" class="md:hidden text-gray-600 ${C.linkHover}">
                            <i class="fas fa-search text-xl"></i>
                        </button>
                        
                        ${rightExtras}
                        
                        <!-- Profile icon -->
                        <div class="relative">
                            <button class="flex items-center justify-center w-10 h-10 rounded-full ${profileBtnClass} transition">
                                <i class="fas fa-user text-lg"></i>
                            </button>
                            <!-- Profile dropdown (hidden by default) -->
                            <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden profile-dropdown z-50">
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-50 ${C.linkHover}">My Profile</a>
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-50 ${C.linkHover}">${isUsedPage ? 'My Ads' : 'Saved Bikes'}</a>
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-50 ${C.linkHover}">${isUsedPage ? 'Messages' : 'Settings'}</a>
                                <hr class="my-2">
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-50 ${C.linkHover}">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile search bar (hidden by default) -->
                <div id="mobile-search" class="mt-3 hidden">
                    <div class="flex items-center bg-gray-100 rounded-full px-4 py-3">
                        <i class="fas fa-search text-gray-500 mr-2"></i>
                        <input type="text" placeholder="${isUsedPage ? 'Search used bikes...' : 'Search bikes, brands...'}" class="bg-transparent outline-none w-full">
                    </div>
                </div>
                
            </div>
        </nav>
        
        <!-- Mobile menu (Outside Nav for simpler stacking) -->
        <div id="mobile-menu" class="mobile-menu">
            <div class="flex flex-col space-y-3 px-4">
                ${mobileMenuItems}
            </div>
        </div>
        
        <!-- Overlay -->
        <div id="menu-overlay" class="menu-overlay"></div>
        `;
    }

    // Get footer HTML template
    function getFooterHTML() {
        // Define columns based on mode
        let columnsHTML = '';
        
        if (isUsedPage) {
            // Used Bike Footer Columns
             columnsHTML = `
                <!-- Column 2: Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Buying</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Search Bikes</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Featured Ads</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Price Guide</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Buying Guide</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Verified Sellers</a></li>
                    </ul>
                </div>
                <!-- Column 3: Selling -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Selling</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Post Your Ad</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Seller Dashboard</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Pricing Guide</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Seller Verification</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Promotion Tools</a></li>
                    </ul>
                </div>
            `;
        } else {
             // New Bike Footer Columns
             columnsHTML = `
                <!-- Column 2: Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Home</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Featured Bikes</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Compare Bikes</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Latest News</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Expert Reviews</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-chevron-right text-xs mr-2 ${C.footerIconColor}"></i>Bike Videos</a></li>
                    </ul>
                </div>
                <!-- Column 3: Popular Brands -->
                <div>
                    <h4 class="text-lg font-semibold mb-6">Popular Brands</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-motorcycle text-xs mr-2 ${C.footerIconColor}"></i>Honda</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-motorcycle text-xs mr-2 ${C.footerIconColor}"></i>Yamaha</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-motorcycle text-xs mr-2 ${C.footerIconColor}"></i>Suzuki</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-motorcycle text-xs mr-2 ${C.footerIconColor}"></i>Bajaj</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-motorcycle text-xs mr-2 ${C.footerIconColor}"></i>TVS</a></li>
                        <li><a href="#" class="footer-link text-gray-400 flex items-center"><i class="fas fa-motorcycle text-xs mr-2 ${C.footerIconColor}"></i>Royal Enfield</a></li>
                    </ul>
                </div>
            `;
        }

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
                                <i class="fas fa-motorcycle mr-2 ${C.logoIconColor}"></i> ${C.brandName}
                            </div>
                        </div>
                        <p class="text-gray-400 mb-6 text-sm leading-relaxed">
                            ${isUsedPage 
                                ? "Bangladesh's trusted used bike marketplace. Connect buyers and sellers for safe and transparent bike transactions." 
                                : "Your ultimate destination for motorcycles in Bangladesh. Find the latest bikes, compare prices, read reviews, and connect with dealers nationwide."
                            }
                        </p>
                        
                        <!-- Social Media Links -->
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
                            <div class="flex space-x-3">
                                <a href="#" class="social-icon social-facebook w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition duration-300">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-icon social-youtube w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition duration-300">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a href="#" class="social-icon social-instagram w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition duration-300">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                ${!isUsedPage ? `
                                <a href="#" class="social-icon social-twitter w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition duration-300">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-icon social-linkedin w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition duration-300">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    
                    ${columnsHTML}
                    
                    <!-- Column 4: Newsletter -->
                    <div>
                        <h4 class="text-lg font-semibold mb-6">Stay Updated</h4>
                        <p class="text-gray-400 mb-4 text-sm">
                            ${isUsedPage ? "Get the latest bike listings and market trends." : "Subscribe to our newsletter for the latest bike launches, reviews, and offers."}
                        </p>
                        
                        <form class="mb-6">
                            <div class="flex flex-col space-y-3">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    class="newsletter-input bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none ${C.newsletterFocus} transition duration-300"
                                >
                                <button 
                                    type="submit" 
                                    class="${C.btnPrimary} text-white font-medium py-3 rounded-lg transition duration-300 flex items-center justify-center"
                                >
                                    <i class="fas fa-paper-plane mr-2"></i>
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        
                        <!-- Contact Info -->
                        <div class="space-y-3">
                            <div class="flex items-center text-gray-400">
                                <i class="fas fa-envelope mr-3 ${C.footerIconColor}"></i>
                                <span>${isUsedPage ? 'support@mrbikery.com' : 'info@MrBike.com'}</span>
                            </div>
                            <div class="flex items-center text-gray-400">
                                <i class="fas fa-phone mr-3 ${C.footerIconColor}"></i>
                                <span>+880 1XXX-XXXXXX</span>
                            </div>
                            <div class="flex items-center text-gray-400">
                                <i class="fas fa-map-marker-alt mr-3 ${C.footerIconColor}"></i>
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
                            &copy; 2024 ${C.brandName}. All rights reserved.
                        </p>
                    </div>
                    
                    <div class="flex flex-wrap justify-center space-x-6">
                        <a href="#" class="text-gray-500 hover:text-gray-300 text-sm transition duration-300">Privacy Policy</a>
                        <a href="#" class="text-gray-500 hover:text-gray-300 text-sm transition duration-300">Terms of Service</a>
                        ${isUsedPage ? `<a href="#" class="text-gray-500 hover:text-gray-300 text-sm transition duration-300">Safety Tips</a>` : ''}
                        <a href="#" class="text-gray-500 hover:text-gray-300 text-sm transition duration-300">Cookie Policy</a>
                    </div>
                </div>
                
                <!-- Back to Top Button -->
                <div class="mt-8 text-center">
                    <button id="back-to-top" class="back-to-top inline-flex items-center text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-full px-5 py-2 transition duration-300">
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
            const menuOverlay = document.getElementById('menu-overlay');
            
            function toggleMenu() {
                hamburger.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                if (menuOverlay) {
                    menuOverlay.classList.toggle('active');
                    
                    // Prevent body text selection/interaction when open? Optional but good.
                    // document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
                }
                
                // Close mobile search if open
                if (mobileSearch && !mobileSearch.classList.contains('hidden')) {
                    mobileSearch.classList.add('hidden');
                }
            }

            hamburger.addEventListener('click', toggleMenu);
            
            // Close when clicking overlay
            if (menuOverlay) {
                menuOverlay.addEventListener('click', function() {
                    if (mobileMenu.classList.contains('active')) {
                        toggleMenu();
                    }
                });
            }
        }
        
        // Toggle mobile search
        if (searchIcon && mobileSearch) {
            searchIcon.addEventListener('click', function() {
                mobileSearch.classList.toggle('hidden');
                
                // Close mobile menu if open
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                     // We need to properly close it using the same logic or just remove classes manually
                     mobileMenu.classList.remove('active');
                     hamburger.classList.remove('active');
                     const menuOverlay = document.getElementById('menu-overlay');
                     if (menuOverlay) menuOverlay.classList.remove('active');
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
        
        // Faded logo is now a link, so we don't need to prevent default unless we want special transitions.
        // But the user requested it to "switch" files, so a standard link is best.
        // We can keep the event listener if we want to confirm, but clean is better.
        // if (fadedLogo) { ... }
        
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

})();
