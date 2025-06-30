function trocarVideo() {
  const video = document.getElementById('bg-video');
  if (!video) return;

  const isMobile = window.innerWidth <= 768;
  const src = isMobile
    ? "/public/bg-section-1-mobile.mp4"
    : "/public/bg-section-1.mp4";

  // Usa currentSrc (mais confiável para <source>)
  if (video.currentSrc.includes(src)) return;

  video.setAttribute('src', src);
  video.load();
  video.play().catch(() => {
    // Sem problema: alguns navegadores móveis bloqueiam autoplay
  });
}

window.addEventListener('DOMContentLoaded', trocarVideo);
window.addEventListener('resize', trocarVideo);

export default trocarVideo;
