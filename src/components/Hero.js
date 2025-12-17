export default function Hero(){
  return (
    <header className="hero">
      <div className="container">
        <div className="space-y">
          <div className="badge" style={{marginBottom: '16px'}}>
            <i className="fas fa-tools"></i> Premium Construction Solutions
          </div>
          <h1>Centering & Construction Materials — On Time, Every Time</h1>
          <p>
            We supply and rent scaffolding, centering sheets, column boxes, props and site equipment.
            Trusted by contractors for fast delivery and reliable quality across Tiruppur and nearby districts.
          </p>
          <div className="mt-4" style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <a className="btn btn-3d primary" href="#services">
              <i className="fas fa-th-large"></i> Explore Services
            </a>
            <a className="btn outline secondary" href="/contact">
              <i className="fas fa-file-invoice"></i> Get a Quote
            </a>
          </div>
          
          {/* Feature highlights */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '48px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb'}}>
                <i className="fas fa-shipping-fast" style={{fontSize: '1.5rem'}}></i>
              </div>
              <div>
                <div style={{fontWeight: '700', color: '#111827'}}>Fast Delivery</div>
                <div style={{fontSize: '0.875rem', color: '#6b7280'}}>Quick turnaround</div>
              </div>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb'}}>
                <i className="fas fa-award" style={{fontSize: '1.5rem'}}></i>
              </div>
              <div>
                <div style={{fontWeight: '700', color: '#111827'}}>Premium Quality</div>
                <div style={{fontSize: '0.875rem', color: '#6b7280'}}>Trusted materials</div>
              </div>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb'}}>
                <i className="fas fa-headset" style={{fontSize: '1.5rem'}}></i>
              </div>
              <div>
                <div style={{fontWeight: '700', color: '#111827'}}>24/7 Support</div>
                <div style={{fontSize: '0.875rem', color: '#6b7280'}}>Always available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
