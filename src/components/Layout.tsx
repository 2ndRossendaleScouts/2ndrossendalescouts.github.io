import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems: [label: string, to: string][] = [
  ['Home', '/'],
  ['Beavers', '/beavers'],
  ['Cubs', '/cubs'],
  ['Scouts', '/scouts'],
  ['Band', '/band'],
  ['Contact', '/contact'],
]

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" to="/" aria-label="2nd Rossendale home">
          <span className="logo-placeholder" aria-label="Logo placeholder">LOGO</span>
          <span><strong>2nd Rossendale</strong><small>Scout Group &amp; Band</small></span>
        </Link>
        <button className="nav-toggle" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(v => !v)}>Menu</button>
        <nav id="site-nav" className={`site-nav${menuOpen ? ' open' : ''}`}>
          {navItems.map(([label, to]) => <NavLink key={to} to={to} end>{label}</NavLink>)}
        </nav>
      </div>
    </header>
    <main id="main"><Outlet /></main>
    <footer><div className="wrap footer-inner"><span>2nd Rossendale Scout Group and Band</span><span>Registered Charity 1061708</span></div></footer>
  </>
}
