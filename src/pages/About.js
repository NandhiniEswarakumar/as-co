export default function About(){
  return (
    <section className="section">
      <div className="container grid grid-2">
        <div className="space-y">
          <h1 className="title-accent">About A.S.& Co</h1>
          <p className="muted">We are a Tiruppur-based supplier focused on centering, scaffolding and construction site equipment. Since day one, our goal has been simple: deliver the right materials, at the right time, with no compromise on safety.</p>
          <p className="muted">Our inventory covers a wide range—from centering sheets and column boxes to adjustable props and vibrators. Whether it’s a small residential slab or a multi-storey site, we scale to your schedule.</p>
          <div>
            <h3>Why contractors choose us</h3>
            <ul className="mt-2" style={{paddingLeft: '18px'}}>
              <li>Reliable quality and well-maintained materials</li>
              <li>Transparent pricing and flexible rentals</li>
              <li>Prompt delivery and easy returns</li>
              <li>Friendly support in Tamil & English</li>
            </ul>
          </div>
        </div>
        <div className="card card-3d">
          <h3>At a glance</h3>
          <div className="space-y mt-2 muted">
            <div>Base: Tiruppur, Tamil Nadu</div>
            <div>Service Areas: Tiruppur and nearby districts</div>
            <div>Working Hours: 9:00 AM – 7:00 PM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
