// Бургер
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('active'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('active')));
}

// Тема
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') { body.classList.add('dark'); if(themeToggle) themeToggle.textContent = '☀️'; }
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Анимация
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Лайтбокс
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
if (lightbox) {
    document.querySelectorAll('.gallery-item').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.classList.add('active'); lightboxImg.src = img.src; body.style.overflow = 'hidden';
        });
    });
    function closeLightbox() { lightbox.classList.remove('active'); body.style.overflow = ''; }
    if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}

// Форма
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const status = document.getElementById('status');
        status.textContent = 'Отправка...';
        status.style.color = '#f06292';
        setTimeout(() => {
            status.textContent = '✅ Спасибо! Сообщение отправлено (демо).';
            status.style.color = '#4caf50';
            this.reset();
        }, 1000);
    });
}