export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container section">
        <div className="cols">
          <div className="space-y">
            <div className="brand" style={{color:'var(--text-primary)', marginBottom: '16px'}}>
              <span className="brand-badge">AS</span>
              <span>A.S.& Co</span>
            </div>
            <p className="muted" style={{marginBottom: '20px'}}>Centering & construction materials, scaffolding and equipment rentals. Professional, on-time service.</p>
            
            <div style={{marginBottom: '24px'}}>
              <p style={{fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px'}}>
                <i className="fas fa-phone-alt" style={{marginRight: '8px', color: 'var(--primary)'}}></i>
                Call Us Now
              </p>
              <div className="space-y" style={{gap: '8px'}}>
                <a className="btn btn-3d primary" href="tel:+919443142580" style={{width: '100%', justifyContent: 'center'}}>
                  <i className="fas fa-phone-alt"></i> 94431 42580
                </a>
                <a className="btn outline secondary" href="tel:+919750142580" style={{width: '100%', justifyContent: 'center'}}>
                  <i className="fas fa-phone-alt"></i> 97501 42580
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
              <i className="fas fa-link" style={{color: 'var(--primary)'}}></i>
              Quick Links
            </h4>
            <div className="mt-2 space-y links">
              <a href="/" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <i className="fas fa-home" style={{color: 'var(--primary)', fontSize: '0.875rem', width: '16px'}}></i>
                Home
              </a>
              <a href="/services" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <i className="fas fa-th-large" style={{color: 'var(--primary)', fontSize: '0.875rem', width: '16px'}}></i>
                Services
              </a>
              <a href="/about" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <i className="fas fa-info-circle" style={{color: 'var(--primary)', fontSize: '0.875rem', width: '16px'}}></i>
                About
              </a>
              <a href="/contact" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <i className="fas fa-envelope" style={{color: 'var(--primary)', fontSize: '0.875rem', width: '16px'}}></i>
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
              <i className="fas fa-map-marker-alt" style={{color: 'var(--primary)'}}></i>
              Contact Info
            </h4>
            <div className="mt-2 space-y muted" style={{fontSize: '0.9375rem', lineHeight: '1.8'}}>
              <div style={{display: 'flex', alignItems: 'start', gap: '8px'}}>
                <i className="fas fa-phone" style={{color: 'var(--primary)', marginTop: '2px', fontSize: '0.875rem', minWidth: '16px'}}></i>
                <div>
                  <div style={{fontWeight: '600', color: 'var(--text-primary)'}}>Office</div>
                  <a href="tel:+914212421087" style={{color: 'inherit'}}>0421-2421087</a>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'start', gap: '8px'}}>
                <i className="fas fa-mobile-alt" style={{color: 'var(--primary)', marginTop: '2px', fontSize: '0.875rem', minWidth: '16px'}}></i>
                <div>
                  <div style={{fontWeight: '600', color: 'var(--text-primary)'}}>Mobile</div>
                  <a href="tel:+919443142580" style={{color: 'inherit'}}>94431-42580</a>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'start', gap: '8px'}}>
                <i className="fas fa-map-pin" style={{color: 'var(--primary)', marginTop: '2px', fontSize: '0.875rem', minWidth: '16px'}}></i>
                <div>
                  <div style={{fontWeight: '600', color: 'var(--text-primary)'}}>Location</div>
                  <span>Tiruppur, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 center copyright">
        <div style={{marginBottom: '8px'}}>© {year} A.S.& Co. All rights reserved.</div>
        <div style={{fontSize: '0.8125rem', color: 'var(--text-tertiary)'}}>
          Made with <i className="fas fa-heart" style={{color: 'var(--error)'}}></i> for construction professionals
        </div>
      </div>
    </footer>
  );
}
