// js/utils.js
document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Optimized Grain Pause
  const grain = document.querySelector('body');
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      grain.style.animationPlayState = 'paused';
    } else {
      grain.style.animationPlayState = 'running';
    }
  });

  // Copy Email with Fallback for non-HTTPS
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'raghurajsingh152007@gmail.com';
      
      const updateButton = (text) => {
        const span = copyBtn.querySelector('span');
        if (span) {
          const original = span.textContent;
          span.textContent = text;
          setTimeout(() => span.textContent = original, 2000);
        }
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email)
          .then(() => updateButton('Copied! ✓'))
          .catch(() => fallbackCopy(email, updateButton));
      } else {
        fallbackCopy(email, updateButton);
      }
    });
  }

  function fallbackCopy(text, callback) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) callback('Copied! ✓');
      else callback('Failed :(');
    } catch (err) {
      callback('Error :(');
    }
    document.body.removeChild(textArea);
  }
});
