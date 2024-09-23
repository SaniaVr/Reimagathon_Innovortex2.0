document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Function to load content dynamically
    function loadPage(page) {
      fetch(`${page}.html`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Page not found');
          }
          return response.text();
        })
        .then(data => {
          contentDiv.innerHTML = data;
        })
        .catch(error => {
          contentDiv.innerHTML = '<h1>Error 404: Page Not Found</h1>';
        });
    }
  
    // Attach event listeners to navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const page = event.target.getAttribute('data-page');
        loadPage(page);
      });
    });
  });  