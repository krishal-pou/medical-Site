// ============================================
// CHOWKBAZAR MEDICAL - MAIN JAVASCRIPT
// ============================================

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupScrollBehavior();
    setupShopSlider();
    setupProductFilters();
    setupContactForm();
    setActiveNavLink();
});

function setupShopSlider() {
    const slider = document.getElementById('shopSlider');
    const track = document.getElementById('shopSliderTrack');
    const prevBtn = document.getElementById('shopSliderPrev');
    const nextBtn = document.getElementById('shopSliderNext');
    const dots = document.querySelectorAll('#shopSliderDots .shop-slider-dot');

    if (!slider || !track || dots.length === 0) {
        return;
    }

    let currentSlide = 0;
    let intervalId;

    function updateSlider(index) {
        currentSlide = (index + dots.length) % dots.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === currentSlide);
        });
    }

    function startAutoSlide() {
        clearInterval(intervalId);
        intervalId = setInterval(function() {
            updateSlider(currentSlide + 1);
        }, 4000);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            updateSlider(currentSlide - 1);
            startAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            updateSlider(currentSlide + 1);
            startAutoSlide();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            updateSlider(index);
            startAutoSlide();
        });
    });

    slider.addEventListener('mouseenter', function() {
        clearInterval(intervalId);
    });

    slider.addEventListener('mouseleave', function() {
        startAutoSlide();
    });

    updateSlider(0);
    startAutoSlide();
}

// Setup Navigation
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

// Setup scroll behavior for navbar
function setupScrollBehavior() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });
}

// Setup product filters
function setupProductFilters() {
    const searchInputs = document.querySelectorAll('#searchInput, #mobileSearchInput');
    const productsGrid = document.getElementById('productsGrid');

    if ((!searchInputs || searchInputs.length === 0) || !productsGrid || typeof products === 'undefined') {
        return; // Not on products page
    }

    let currentCategory = 'all';

    displayProducts(products);

    searchInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            searchInputs.forEach(otherInput => {
                if (otherInput !== e.target) {
                    otherInput.value = e.target.value;
                }
            });

            filterAndDisplayProducts(searchTerm, currentCategory);
        });
    });

    window.setCurrentProductCategory = function(category) {
        currentCategory = category;
    };
}

function filterCategory(category) {
    if (typeof window.setCurrentProductCategory === 'function') {
        window.setCurrentProductCategory(category);
    }

    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const searchTerm = searchInput && searchInput.value
        ? searchInput.value.toLowerCase()
        : (mobileSearchInput && mobileSearchInput.value ? mobileSearchInput.value.toLowerCase() : '');

    // Update active button
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    filterBtns.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    const mobileCategoryLabel = document.getElementById('mobileCategoryLabel');
    const mobileCategoryPicker = document.getElementById('mobileCategoryPicker');
    if (mobileCategoryLabel) {
        mobileCategoryLabel.textContent = category === 'all' ? 'All Products' : getCategoryLabel(category);
    }
    if (mobileCategoryPicker) {
        mobileCategoryPicker.open = false;
    }

    filterAndDisplayProducts(searchTerm, category);
}

function filterAndDisplayProducts(searchTerm, category) {
    let filtered = products;

    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    displayProducts(filtered, category);
    updateResultsText(filtered.length, category, searchTerm);

    // Show/hide clear filters button
    const clearBtn = document.getElementById('clearFiltersBtn');
    if (clearBtn) {
        if (searchTerm || category !== 'all') {
            clearBtn.style.display = 'inline-block';
        } else {
            clearBtn.style.display = 'none';
        }
    }
}

function displayProducts(productsToDisplay, category = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #9ca3af;">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; display: block; opacity: 0.5;"></i>
                <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #6b7280;">No products found</h3>
                <p style="font-size: 14px;">Try a different search term or category</p>
            </div>
        `;
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <span class="product-category">${getCategoryLabel(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <a href="https://wa.me/9779845087710?text=Hello%2C%20I%20want%20to%20order%3A%20${encodeURIComponent(product.name)}" target="_blank" class="product-button">
                    <i class="fab fa-whatsapp"></i> Order on WhatsApp
                </a>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function getCategoryLabel(category) {
    const labels = {
        'cardio': 'Cardio',
        'diabetic': 'Diabetic',
        'gastric': 'Gastric',
        'nsaid': 'NSAID',
        'dermatology': 'Dermatology',
        'eyecare': 'Eye Care',
        'antihistamine': 'Antihistamine',
        'cough': 'Cough & Cold',
        'asthma': 'Asthma',
        'antibiotics': 'Antibiotics',
        'babycare': 'Baby Care',
        'cosmetics': 'Cosmetics'
    };
    return labels[category] || category;
}

function updateResultsText(count, category, searchTerm) {
    const resultsText = document.getElementById('resultsText');
    if (!resultsText) return;

    let text = `Showing ${count} product${count !== 1 ? 's' : ''}`;

    if (category !== 'all') {
        text += ` in ${getCategoryLabel(category)}`;
    }

    if (searchTerm) {
        text += ` for "${searchTerm}"`;
    }

    resultsText.textContent = text;
}

function clearFilters() {
    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const mobileCategoryLabel = document.getElementById('mobileCategoryLabel');
    const mobileCategoryPicker = document.getElementById('mobileCategoryPicker');

    if (searchInput) searchInput.value = '';
    if (mobileSearchInput) mobileSearchInput.value = '';

    filterBtns.forEach(btn => btn.classList.remove('active'));
    filterBtns[0].classList.add('active'); // Set "All Products" as active

    if (mobileCategoryLabel) mobileCategoryLabel.textContent = 'Select Category';
    if (mobileCategoryPicker) mobileCategoryPicker.open = false;

    displayProducts(products);
    updateResultsText(products.length, 'all', '');

    const clearBtn = document.getElementById('clearFiltersBtn');
    if (clearBtn) clearBtn.style.display = 'none';
}

// Setup contact form
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
        const whatsappLink = `https://wa.me/9779845087710?text=${encodeURIComponent(whatsappMessage)}`;

        // Show success message
        const formSuccess = document.getElementById('formSuccess');
        form.style.display = 'none';
        formSuccess.style.display = 'block';

        // Open WhatsApp
        setTimeout(() => {
            window.open(whatsappLink, '_blank');
        }, 500);
    });
}

// Navigate to page
function navigateTo(page) {
    window.location.href = page;
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
