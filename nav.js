const navContainer = document.getElementById('site-nav');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const links = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'portfolio.html', label: 'Portfolio' },
  { href: 'resume.html', label: 'Resume' },
  { href: 'contact.html', label: 'Contact' }
];

navContainer.innerHTML = `
  <header class="site-header">
    <nav class="navbar" aria-label="Main navigation">
      <a class="logo" href="index.html">Bradley Hagan</a>
      <div class="nav-links">
        ${links.map(link => `<a href="${link.href}" class="${currentPage === link.href ? 'active' : ''}">${link.label}</a>`).join('')}
      </div>
    </nav>
  </header>
`;
