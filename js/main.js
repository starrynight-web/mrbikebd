  function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
    }

    // Optional: close sidebar when clicking outside
    window.addEventListener('click', function (e) {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.querySelector('.hamburger');

      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    });