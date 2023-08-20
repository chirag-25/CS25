function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const categoryButtons = document.querySelectorAll('.category-button');
const projectContainers = document.querySelectorAll('.slider-project');

// Add click event listeners to each category button
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the category data value for the clicked button
    const selectedCategory = button.getAttribute('data-category');

    // Hide all project containers
    projectContainers.forEach(container => {
      container.style.display = 'none';
    });

    // Show project containers with matching data category
    const selectedContainers = document.querySelectorAll(`[data-categories="${selectedCategory}"]`);
    selectedContainers.forEach(container => {
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.justifyContent = 'center';
    });
  });
});

