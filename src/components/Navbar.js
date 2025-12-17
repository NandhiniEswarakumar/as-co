import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="A.S.& Co home">
          <span className="brand-badge">AS</span>
          <span>A.S.& Co</span>
        </Link>

        <div className="menu" role="navigation" aria-label="Main">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : undefined}>
            <i className="fas fa-home"></i> Home
          </NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'active' : undefined}>
            <i className="fas fa-th-large"></i> Services
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : undefined}>
            <i className="fas fa-info-circle"></i> About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : undefined}>
            <i className="fas fa-envelope"></i> Contact
          </NavLink>
          <a href="tel:+919443142580" className="btn btn-3d primary">
            <i className="fas fa-phone-alt"></i> Call Now
          </a>
        </div>

        <button className="hamburger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(v=>!v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="container mobile-panel" style={{display: open ? 'block' : 'none'}}>
        <NavLink to="/" end><i className="fas fa-home"></i> Home</NavLink>
        <NavLink to="/services"><i className="fas fa-th-large"></i> Services</NavLink>
        <NavLink to="/about"><i className="fas fa-info-circle"></i> About</NavLink>
        <NavLink to="/contact"><i className="fas fa-envelope"></i> Contact</NavLink>
        <div className="py-2">
          <a className="btn btn-3d primary" href="tel:+919443142580">
            <i className="fas fa-phone-alt"></i> Call 94431 42580
          </a>
        </div>
      </div>
    </nav>
  );
}
