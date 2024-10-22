// JavaScript for FAQ toggle
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        // Close any other open answers
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allArrows = document.querySelectorAll('.faq-arrow');
        
        allAnswers.forEach(answer => {
            answer.style.display = 'none';  // Hide all answers
        });
        
        allArrows.forEach(arrow => {
            arrow.textContent = '▼';  // Reset all arrows to down
        });
        
        // Open the clicked answer if it's not already open
        const answer = item.nextElementSibling;
        const arrow = item.querySelector('.faq-arrow');
        
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';  // Show clicked answer
            arrow.textContent = '▲';        // Change arrow to up
        } else {
            answer.style.display = 'none';  // Close if already open (optional)
            arrow.textContent = '▼';        // Reset arrow (optional)
        }
    });
});
