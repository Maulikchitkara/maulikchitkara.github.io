const navBtns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const pageId = btn.getAttribute('data-page');
        
        // Remove active class from all buttons and pages
        navBtns.forEach(b => b.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button and corresponding page
        btn.classList.add('active');
        document.getElementById(pageId).classList.add('active');
    });
});
