const darkModeBtn = document.getElementById('dark-mode-toggle'),
sunIcon = document.querySelector('.icon-sun'),
moonIcon = document.querySelector('.icon-moon');

darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.visibility = 'hidden';
        moonIcon.style.visibility = 'visible';
    } else {
        sunIcon.style.visibility = 'visible';
        moonIcon.style.visibility = 'hidden';
    }
});
