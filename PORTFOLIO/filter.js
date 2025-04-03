
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectItems = document.querySelectorAll('.project-item');
            
            // Show all projects initially
            filterProjects('all');
            
            // Add click event listeners to filter buttons
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    // Filter projects based on data-filter attribute
                    const filterValue = this.getAttribute('data-filter');
                    filterProjects(filterValue);
                });
            });
            
            function filterProjects(filter) {
                projectItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                    }
                });
            }
        });
