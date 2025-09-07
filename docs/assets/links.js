// Open external links in new tabs
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="http"]').forEach(a => a.setAttribute('target','_blank'));
});