import '../css/index.css';

export function applyCRTEffect(targetElement) {
  const crtEffect = document.createElement('div');
  crtEffect.className = 'crt-effect';

  const flash = document.createElement('div');
  flash.className = 'crt-flash';

  const tear = document.createElement('div');
  tear.className = 'crt-tear';

  crtEffect.appendChild(flash);
  crtEffect.appendChild(tear);

  targetElement.appendChild(crtEffect);

  // Reset and start animations
  flash.style.animation = 'none';
  tear.style.animation = 'none';
  flash.offsetHeight; // Trigger reflow
  tear.offsetHeight; // Trigger reflow
  flash.style.animation = null;
  tear.style.animation = null;
}