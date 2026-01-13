// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ScrollReveal animations
ScrollReveal().reveal('.section', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.hero-content', { delay: 300, distance: '50px', origin: 'left' });

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.progress');
            const percent = progress.dataset.percent;
            progress.style.width = `${percent}%`;
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill').forEach(skill => observer.observe(skill));

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Message sent! (Demo - check console)');
    this.reset();
});

// PDF Download for Transcripts
document.getElementById('download-transcript').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text('Transcript Placeholder', 10, 10);
    doc.save('transcript.pdf');
});
