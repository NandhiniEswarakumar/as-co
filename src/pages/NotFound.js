export default function NotFound(){
  return (
    <section className="section">
      <div className="container center">
        <div style={{marginBottom: '32px'}}>
          <div style={{fontSize: '120px', fontWeight: '800', background: 'linear-gradient(135deg, #2563eb 0%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: '1'}}>
            404
          </div>
        </div>
        <h1 style={{marginBottom: '16px'}}>Page Not Found</h1>
        <p className="muted mt-2" style={{marginBottom: '32px', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto'}}>
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="mt-4" style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a className="btn primary btn-3d" href="/">
            <i className="fas fa-home"></i> Go to Home
          </a>
          <a className="btn outline secondary" href="/services">
            <i className="fas fa-th-large"></i> View Services
          </a>
        </div>
      </div>
    </section>
  );
}
