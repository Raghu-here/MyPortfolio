// Contact form validation and submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successCard = document.getElementById('successCard');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const subject = document.getElementById('fsubject').value.trim();
    const budget = document.getElementById('fbudget').value.trim();
    const message = document.getElementById('fmessage').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const bodyParts = [
      `Name: ${name}`,
      `Email: ${email}`,
      budget ? `Budget: ${budget}` : '',
      `\nMessage:\n${message}`
    ].filter(Boolean).join('\n');

    const mailtoSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(bodyParts);
    
    window.location.href = `mailto:raghurajsingh152007@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    form.style.display = 'none';
    successCard.classList.add('show');
  });
});
