import { useState, type ReactNode } from 'react'

type Props = { activePage: string; children: ReactNode }

const navItems = [
  ['index', 'Home', 'index.html'],
  ['beavers', 'Beavers', 'beavers.html'],
  ['cubs', 'Cubs', 'cubs.html'],
  ['scouts', 'Scouts', 'scouts.html'],
  ['band', 'Band', 'band.html'],
  ['contact', 'Contact', 'contact.html'],
]

export function Layout({ activePage, children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="index.html" aria-label="2nd Rossendale home">
          <span className="logo-placeholder" aria-label="Logo placeholder">LOGO</span>
          <span><strong>2nd Rossendale</strong><small>Scout Group &amp; Band</small></span>
        </a>
        <button className="nav-toggle" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(v => !v)}>Menu</button>
        <nav id="site-nav" className={`site-nav${menuOpen ? ' open' : ''}`}>
          {navItems.map(([key, label, href]) => <a key={key} aria-current={activePage === key ? 'page' : undefined} href={href}>{label}</a>)}
        </nav>
      </div>
    </header>
    <main id="main">{children}</main>
    <footer><div className="wrap footer-inner"><span>2nd Rossendale Scout Group and Band</span><span>Registered Charity 1061708</span></div></footer>
  </>
}
