import centeringImg from '../assests/photo1.jpeg';
import scaffoldingImg from '../assests/photo2.jpeg';
import equipmentImg from '../assests/photo3.jpeg';
import servicesHero from '../assests/photo 4.jpeg';

export default function Services(){
  const categories = [
    {
      name: 'Centering & Formwork',
      icon: 'fa-border-all',
      image: centeringImg,
      items: ['MS/GI Centering Sheets', 'Angles & Channels', 'Square & Round Column Boxes', 'Beam Bottoms']
    },
    {
      name: 'Scaffolding Systems',
      icon: 'fa-layer-group',
      image: scaffoldingImg,
      items: ['H-Frame Scaffolding', 'Cup-Lock / Ring-Lock', 'Adjustable Props & Spans', 'Platforms & Guardrails']
    },
    {
      name: 'Equipment Rentals',
      icon: 'fa-toolbox',
      image: equipmentImg,
      items: ['Concrete Needle Vibrators', 'Wheel Barrows', 'Mixers (on request)', 'Safety Gear']
    }
    
  ];

  return (
    <section className="section">
      {/* Hero Image Section */}
      <div className="services-hero">
        <img src={servicesHero} alt="Construction Services" />
        <div className="services-hero-overlay">
          <h1>A.S.& Co</h1>
        </div>
      </div>

      <div className="container">
        <div className="center">
          <div className="badge" style={{marginBottom: '16px'}}>
            <i className="fas fa-th-large"></i> Our Services
          </div>
          <h1 className="title-accent">Comprehensive Construction Solutions</h1>
          <p className="muted mt-2">Solid materials, safe scaffolding, quick turnaround.</p>
        </div>

        <div className="services-grid mt-6">
          {categories.map((c, idx) => (
            <div className="service-card card-3d" key={idx}>
              {/* Service Image - will display when uncommented */}
              {c.image && (
                <div className="service-image">
                  <img src={c.image} alt={c.name} />
                </div>
              )}
              
              <div className="service-content">
                <div className="icon">
                  <i className={`fas ${c.icon}`}></i>
                </div>
                <h3>{c.name}</h3>
                <ul className="mt-2" style={{paddingLeft: '18px', lineHeight: '1.8'}}>
                  {c.items.map((it,i)=> (
                    <li key={i} style={{marginTop: 8, color: '#6b7280'}}>
                      <i className="fas fa-check" style={{color: '#10b981', marginRight: '8px', fontSize: '0.875rem'}}></i>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-2 mt-10">
          <div className="card">
            <div className="icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Flexible Rental Periods</h3>
            <p>Short-term or long-term rentals available to match your project timeline. Daily, weekly, or monthly rates.</p>
          </div>
          
          <div className="card">
            <div className="icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Professional Consultation</h3>
            <p>Expert guidance to help you select the right materials and equipment for your specific construction needs.</p>
          </div>
        </div>

        <div className="center mt-10">
          <a className="btn primary btn-3d" href="/contact">
            <i className="fas fa-file-invoice"></i> Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
