import Hero from '../components/Hero';
import showcaseImg from '../assests/photo2.jpeg';
import { useEffect } from 'react';

const services = [
  { 
    title: 'Scaffolding Rentals', 
    desc: 'Sturdy and safe scaffolding systems with fast delivery and setup.',
    icon: 'fa-layer-group'
  },
  { 
    title: 'Centering Sheets', 
    desc: 'MS & GP sheets, angles and channels in multiple sizes.',
    icon: 'fa-border-all'
  },
  { 
    title: 'Props & Jacks', 
    desc: 'Adjustable props, spans and jack systems for slab support.',
    icon: 'fa-compress-arrows-alt'
  },
  { 
    title: 'Column Boxes', 
    desc: 'Square and round column boxes for consistent, clean finishes.',
    icon: 'fa-cubes'
  },
  { 
    title: 'Concrete Vibrators', 
    desc: 'Reliable needle vibrators and accessories for dense compaction.',
    icon: 'fa-wave-square'
  },
  { 
    title: 'Site Equipment', 
    desc: 'Wheel barrows, mixers and other essentials for smooth site work.',
    icon: 'fa-toolbox'
  }
];

export default function Home(){
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); } });
    }, { threshold: 0.15 });
    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Hero />
      
      {/* Image Showcase Section */}
      <section className="section">
        <div className="container">
          <div className="showcase-wrapper">
            <div className="showcase-content reveal">
              <h2 className="title-accent">Our Operations</h2>
              <p className="muted mt-2">Professional scaffolding systems and construction materials you can trust</p>
              <p className="mt-4">With years of experience in the construction industry, A.S.& Co provides premium quality materials and equipment. Our team ensures reliable delivery and expert support for all your project needs.</p>
              <a className="btn primary btn-3d mt-4" href="/services">
                <i className="fas fa-arrow-right"></i> Explore Our Services
              </a>
            </div>
            <div className="showcase-image reveal">
              <img src={showcaseImg} alt="A.S.& Co Operations" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" id="services">
        <div className="container">
          <div className="center">
            <h2 className="title-accent">What We Offer</h2>
            <p className="muted mt-2">Quality materials • Flexible rentals • Prompt support</p>
          </div>
          <div className="grid grid-3 mt-6">
            {services.map((s,i)=> (
              <div className="card card-3d reveal" key={i}>
                <div className="icon">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3>{s.title}</h3>
                <p className="mt-2">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="center mt-10">
            <a className="btn accent btn-3d" href="/contact">
              <i className="fas fa-file-invoice"></i> Request Pricing
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section" style={{background: 'linear-gradient(180deg, #efefef 0%, #f5f5f7 100%)'}}>
        <div className="container">
          <div className="center">
            <h2 className="title-accent">Why Choose A.S.& Co?</h2>
            <p className="muted mt-2">Your trusted partner for construction materials and equipment</p>
          </div>
          
          <div className="grid grid-2 mt-6">
            <div className="card reveal">
              <div className="icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Reliable Quality</h3>
              <p>All materials are well-maintained and meet industry standards for safety and durability.</p>
            </div>
            
            <div className="card reveal">
              <div className="icon">
                <i className="fas fa-rupee-sign"></i>
              </div>
              <h3>Transparent Pricing</h3>
              <p>Clear pricing with flexible rental options that work for your project timeline and budget.</p>
            </div>
            
            <div className="card reveal">
              <div className="icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Fast Delivery</h3>
              <p>Prompt delivery and easy returns to keep your project on schedule without delays.</p>
            </div>
            
            <div className="card reveal">
              <div className="icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Friendly Support</h3>
              <p>Professional assistance in Tamil and English to help you choose the right materials.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
