function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function window.open(path, filename) {
  const link = document.createElement('a');
  link.href = path; // Path to your local certificate
  link.download = filename;   // Suggested file name for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}