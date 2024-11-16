// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
  animatedElements.forEach(el => observer.observe(el));

  // Mobile menu toggle
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });
});

const galleryData = {
    "images": [
        {
            "id": 1,
            "title": "School Building",
            "description": "Main entrance of our school",
            "thumbnail": "/images/hero.jpeg",
            "fullImage": "/images/hero.jpeg"
        },
        {
            "id": 2,
            "title": "Science Lab",
            "description": "Students working in the science laboratory",
            "thumbnail": "/images/hero.jpeg",
            "fullImage": "/images/hero.jpeg"
        },
        {
            "id": 3,
            "title": "Sports Day",
            "description": "Annual sports day celebration",
            "thumbnail": "/images/hero.jpeg",
            "fullImage": "/images/hero.jpeg"
        },
        {
            "id": 4,
            "title": "Cultural Festival",
            "description": "Students performing at the annual day",
            "thumbnail": "/images/hero.jpeg",
            "fullImage": "/images/hero.jpeg"
        },
        {
            "id": 5,
            "title": "Library",
            "description": "Our well-stocked library",
            "thumbnail": "/images/hero.jpeg",
            "fullImage": "/images/hero.jpeg"
        },
        {
            "id": 6,
            "title": "Computer Lab",
            "description": "Modern computer laboratory",
            "thumbnail": "/images/hero.jpeg",
            "fullImage": "/images/hero.jpeg"
        }
    ]
};

// Function to load gallery images
function loadGallery() {
    const galleryGrid = document.getElementById('gallery-grid');

    galleryData.images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300';
        galleryItem.innerHTML = `
            <div class="relative group">
                <img src="${image.thumbnail}" alt="${image.title}" class="w-full h-64 object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div class="text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
<!--                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />-->
<!--                        </svg>-->
                    </div>
                </div>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-1">${image.title}</h3>
                <p class="text-gray-600">${image.description}</p>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}


// Load gallery when page loads
document.addEventListener('DOMContentLoaded', loadGallery);
