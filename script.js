// Θέτει το έτος στο footer
document.getElementById('year').textContent = new Date().getFullYear();


// Theme toggle με αποθήκευση στο localStorage
const btn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if(currentTheme) document.documentElement.setAttribute('data-theme', currentTheme);


btn.addEventListener('click', ()=>{
const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? '' : 'dark';
if(theme) document.documentElement.setAttribute('data-theme','dark'); else document.documentElement.removeAttribute('data-theme');
localStorage.setItem('theme', theme);
btn.textContent = theme ? '☀️' : '🌙';
});


// Contact form — απλό client-side handling
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', (e)=>{
e.preventDefault();
const data = new FormData(form);
// Για αρχή απλά δείξε μήνυμα και κάνε reset
msg.textContent = 'Το μήνυμα στάλθηκε (demo) — θα το αντικαταστήσεις με πραγματικό API όπως EmailJS.';
form.reset();
setTimeout(()=> msg.textContent = '', 4000);
});


// Προαιρετικό: μικρή animation όταν τα cards εμφανίζονται
window.addEventListener('DOMContentLoaded', ()=>{
document.querySelectorAll('.card').forEach((el, i)=>{
el.style.opacity = 0; el.style.transform = 'translateY(8px)';
setTimeout(()=>{ el.style.transition = 'all .45s cubic-bezier(.2,.9,.2,1)'; el.style.opacity = 1; el.style.transform = 'none' }, i*80);
});
});
