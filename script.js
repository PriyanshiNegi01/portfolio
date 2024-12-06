const webBackground = document.querySelector('.web-background');
  
// Adjust background position based on mouse movement
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  webBackground.style.backgroundPosition = `${x}% ${y}%`; // Dynamically adjust background position
});