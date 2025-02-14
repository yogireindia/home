document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.previousElementSibling;
        const isExpanded = content.classList.contains('expanded');
        
        // Toggle content
        content.classList.toggle('collapsed');
        content.classList.toggle('expanded');
        
        // Toggle button
        this.classList.toggle('expanded');
    });
});

const testimonials = [
    {
        id: 1,
        image: 'jala.png',    // Put your first testimonial image in images folder
        content: 'First testimonial text goes here. A customer review or feedback.'
    },
    {
        id: 2,
        image: 't7.png',    // Put your second testimonial image in images folder
        content: 'Second testimonial text goes here. Another customer review.'
    },
    {
        id: 3,
        image: 'sid.png',    // Put your third testimonial image in images folder
        content: 'Third testimonial text goes here. More customer feedback.'
    },
    {
        id: 4,
        image: 't8.png',    // Put your fourth testimonial image in images folder
        content: 'Fourth testimonial text goes here. Customer experience story.'
    }
];

// Get the container elements
const track = document.querySelector('.testimonials-track');
const dotsContainer = document.querySelector('.dots-container');

// Create testimonial cards
testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
        <img src="${testimonial.image}" 
             alt="Testimonial ${testimonial.id}" 
             class="testimonial-image">
        <div class="testimonial-content">
            <p>${testimonial.content}</p>
        </div>
    `;
    track.appendChild(card);
});

// Create navigation dots
testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.addEventListener('click', () => navigateToSlide(i));
    dotsContainer.appendChild(dot);
});

// Navigation function
function navigateToSlide(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    // Calculate center position
    let translateX;
    if (index <= 1) {
        translateX = 0;
    } else if (index >= testimonials.length - 2) {
        translateX = -(testimonials.length - 3) * (cards[0].offsetWidth + 32);
    } else {
        translateX = -(index - 1) * (cards[0].offsetWidth + 32);
    }

    // Update track position with smooth animation
    track.style.transform = `translateX(${translateX}px)`;

    // Update active states
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    cards[index].classList.add('active');
    dots[index].classList.add('active');
}

// Initialize first slide
navigateToSlide(0);
//--------------------------------------------------------------


const programs = [
    {
        id: 1,
        name: "Srishti Children's Online Camp",
        details: "12-week intensive program covering full-stack web development",
        duration: "12 weeks",
        startDate: "February 1, 2025"
    },
    {
        id: 2,
        name: "Srishti Children's Camp",
        details: "Learn the basics of data analysis and machine learning",
        duration: "8 weeks",
        startDate: "March 15, 2025"
    },
    {
        id: 3,
        name: "Aahar Live Online Session",
        details: "Master user experience and interface design principles",
        duration: "6 weeks",
        startDate: "April 1, 2025"
    },
    {
        id: 4,
        name: "Surya Shakti",
        details: "Comprehensive digital marketing strategies and implementation",
        duration: "10 weeks",
        startDate: "March 1, 2025"
    },
    {
        id: 5,
        name: "Sunayana (Eye Care Program)",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 6,
        name: "Sunayana (Eye Care Program)",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 7,
        name: "Shanmukhi Mudra, Pranayam & Aum Chanting",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 8,
        name: " Angamardana ",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 9,
        name: " Bhuta Shuddhi & Bhakti Sadhana ",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 10,
        name: " Surya Kriya ",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 11,
        name: " Jalaneti & Pranayam ",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 12,
        name: " Hatha Yoga Review Sessions ",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 13,
        name: " Yogasanas ",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 14,
        name: " Srishti Retreat Family Camp ",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 15,
        name: " Dwijas — A 21 Day Live Online Session ",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    },
    {
        id: 16,
        name: " Aahar Hindi Live Online Session ",
        details: "Build iOS and Android applications from scratch",
        duration: "14 weeks",
        startDate: "February 15, 2025"
    }
    // Add more programs as needed
];

// Populate dropdown
const dropdown = document.getElementById('programDropdown');
const programsGrid = document.getElementById('programsGrid');

// Create program cards
programs.forEach(program => {
    // Add to dropdown
    const option = document.createElement('option');
    option.value = program.id;
    option.textContent = program.name;
    dropdown.appendChild(option);

    // Create card
    const card = document.createElement('div');
    card.className = 'program-card';
    card.id = `program-${program.id}`;
    card.innerHTML = `
        <h3 class="program-title">${program.name}</h3>
        <div class="program-details">
            <p>${program.details}</p>
            <p><strong>Duration:</strong> ${program.duration}</p>
            <p><strong>Start Date:</strong> ${program.startDate}</p>
        </div>
        <button class="request-btn" onclick="requestProgram('${program.name}')">
            Request to Attend
        </button>
    `;
    programsGrid.appendChild(card);
});

// Handle dropdown selection
dropdown.addEventListener('change', function() {
    const selectedId = this.value;
    const initialMessage = document.querySelector('.initial-message');
    
    // Hide initial message if a program is selected
    if (selectedId) {
        initialMessage.style.display = 'none';
    } else {
        initialMessage.style.display = 'block';
    }

    // Show selected program card
    document.querySelectorAll('.program-card').forEach(card => {
        if (card.id === `program-${selectedId}`) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
});

// Handle program request
function requestProgram(programName) {
    alert(`Request submitted for ${programName}! We'll contact you with more information.`);
}

document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('mukulsection').scrollIntoView({ behavior: 'smooth' });
});