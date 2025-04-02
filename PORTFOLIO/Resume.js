
    // Create bubbles dynamically
    document.addEventListener('DOMContentLoaded', function() {
        const resumeSection = document.querySelector('.resume');
        const bubbleCount = 15;
        
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Random size between 5px and 30px
            const size = Math.random() * 25 + 5;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Random position
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.bottom = `-${size}px`;
            
            // Random animation duration between 10s and 20s
            const duration = Math.random() * 10 + 10;
            bubble.style.animationDuration = `${duration}s`;
            
            // Random delay
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            
            resumeSection.appendChild(bubble);
        }
    });
