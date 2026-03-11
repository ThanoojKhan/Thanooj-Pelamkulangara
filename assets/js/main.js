document.addEventListener("DOMContentLoaded", () => {

  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }

  const hamburger = document.getElementById("hamburger")
  const sidebar = document.getElementById("sidebar")
  const overlay = document.getElementById("sidebarOverlay")

  function openMenu() {
    sidebar.classList.add("open")
    overlay.classList.add("visible")
  }

  function closeMenu() {
    sidebar.classList.remove("open")
    overlay.classList.remove("visible")
  }

  hamburger.addEventListener("click", () => {
    sidebar.classList.contains("open") ? closeMenu() : openMenu()
  })

  overlay.addEventListener("click", closeMenu)

  document.querySelectorAll(".sidebar-link, .nav-cta, .sidebar-link-a").forEach(link => {
    link.addEventListener("click", closeMenu)
  })
})