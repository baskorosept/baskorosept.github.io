// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
   searchForm.classList.toggle('active'); 
   searchBox.focus();
   e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');


document.addEventListener('click', function(e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    });

// Data for your projects (replace with your actual image paths)
        const projectsData = {
            sport: [
                'img/carousel/sport/Sport1.JPG',
                'img/carousel/sport/Sport2.JPG',
                'img/carousel/sport/Sport3.JPG',
                'img/carousel/sport/Sport4.JPG',
                'img/carousel/sport/Sport5.JPG',
                'img/carousel/sport/Sport6.JPG',
                'img/carousel/sport/Sport7.PNG',
                'img/carousel/sport/Sport8.PNG',
                'img/carousel/sport/Sport9.PNG'
            ],
            daily_life: [
                'img/carousel/daily_life/daily1.jpg',
                'img/carousel/daily_life/daily2.jpg',
                'img/carousel/daily_life/daily3.jpg',
                'img/carousel/daily_life/daily4.jpg',
                'img/carousel/daily_life/daily5.jpg'
            ],
            architecture: [
                'img/carousel/architecture/arch1.jpg',
                'img/carousel/architecture/arch2.jpg',
                'img/carousel/architecture/arch3.jpg',
                'img/carousel/architecture/arch4.jpg',
                'img/carousel/architecture/arch5.jpg'
            ],
            portrait: [
                'img/carousel/portrait/port1.jpg',
                'img/carousel/portrait/port2.jpg',
                'img/carousel/portrait/port3.jpg',
                'img/carousel/portrait/port4.jpg',
                'img/carousel/portrait/port5.jpg'
            ],
            culture: [
                'img/carousel/culture/cult1.jpg',
                'img/carousel/culture/cult2.jpg',
                'img/carousel/culture/cult3.jpg',
                'img/carousel/culture/cult4.jpg',
                'img/carousel/culture/cult5.jpg'
            ],
            music: [
                'img/carousel/music/music1.jpg',
                'img/carousel/music/music2.jpg',
                'img/carousel/music/music3.jpg',
                'img/carousel/music/music4.jpg',
                'img/carousel/music/music5.jpg'
            ]
        };

        // Get the modal elements
        const modal = document.getElementById('projectModal');
        const closeButton = document.querySelector('.close-button');
        const modalTitle = document.getElementById('modal-title');
        const carouselSlidesContainer = document.getElementById('carouselSlides');
        const prevSlideButton = document.getElementById('prevSlide');
        const nextSlideButton = document.getElementById('nextSlide');

        let currentSlideIndex = 0;
        let currentProjectImages = [];

        // Function to open the modal and load carousel images
        function openProjectModal(projectName, title) {
            modal.style.display = 'flex'; // Use flex to center the modal content
            modalTitle.textContent = title;
            currentProjectImages = projectsData[projectName] || [];
            currentSlideIndex = 0; // Reset to first slide

            // Clear previous slides
            carouselSlidesContainer.innerHTML = '';

            // Add images to the carousel
            currentProjectImages.forEach(imageSrc => {
                const slideDiv = document.createElement('div');
                slideDiv.classList.add('carousel-slide');
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = title + ' photo'; // More descriptive alt text
                slideDiv.appendChild(img);
                carouselSlidesContainer.appendChild(slideDiv);
            });

            updateCarousel();
        }

        // Function to update carousel display
        function updateCarousel() {
            if (currentProjectImages.length === 0) {
                carouselSlidesContainer.style.transform = `translateX(0)`;
                prevSlideButton.style.display = 'none';
                nextSlideButton.style.display = 'none';
                return;
            }

            const offset = -currentSlideIndex * 100;
            carouselSlidesContainer.style.transform = `translateX(${offset}%)`;

            // Hide/show navigation buttons based on current slide
            prevSlideButton.style.display = (currentSlideIndex === 0) ? 'none' : 'block';
            nextSlideButton.style.display = (currentSlideIndex === currentProjectImages.length - 1) ? 'none' : 'block';
        }

        // Event Listeners for project titles
        document.querySelectorAll('.menu-card-title a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default link behavior
                const projectName = this.dataset.project;
                const projectTitle = this.textContent;
                openProjectModal(projectName, projectTitle);
            });
        });

        // Event Listeners for carousel navigation
        prevSlideButton.addEventListener('click', () => {
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                updateCarousel();
            }
        });

        nextSlideButton.addEventListener('click', () => {
            if (currentSlideIndex < currentProjectImages.length - 1) {
                currentSlideIndex++;
                updateCarousel();
            }
        });

        // Close modal when close button is clicked
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside the modal content
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });

        // Optional: Close modal with Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });

    const textToType = "Hi, I’m Baskoro Septiadi from Semarang, Central Java, Indonesia. I’ve spent the last 16 years working in the media industry, mainly with a local newspaper. My passion is photojournalism, especially sports photography, which has been my main focus throughout my career. I love capturing the energy and stories behind every game.";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;
    const typingSpeed = 60; // Kecepatan mengetik (dalam milidetik per karakter)

    function typeWriter() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Setelah selesai mengetik, Anda bisa menghapus kursor atau membiarkannya
            typingElement.style.borderRight = 'none'; 
        }
    }

    // Panggil fungsi typeWriter saat halaman dimuat
    window.onload = function() {
        typeWriter();
    };

    function typeWriter() {
  if (charIndex < textToType.length) {
  typingElement.textContent += textToType.charAt(charIndex);
   charIndex++;
    setTimeout(typeWriter, typingSpeed);
    } else {
    typingElement.style.animation = 'blink 1s step-end infinite';
    }
    }

    