// JavaScript to handle sidebar toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const footnoteLinks = document.querySelectorAll(".footnote-toggle");
  const sidebar = document.getElementById("footnote-sidebar");
  const mainContent = document.querySelector("main");

  // Function to toggle the sidebar visibility
  function toggleSidebar() {
    const isActive = sidebar.classList.contains("active");
    if (isActive) {
      sidebar.classList.remove("active");
      mainContent.classList.remove("sidebar-open");
    } else {
      sidebar.classList.add("active");
      mainContent.classList.add("sidebar-open");
    }
  }

  // Attach event listener to all footnote links
  footnoteLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      toggleSidebar();
    });
  });

  // Close the sidebar when clicking on the "back" link within the sidebar
  sidebar.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      toggleSidebar();
    }
  });
});
