import { useState } from 'react';

export default function Contact(){
  const [form, setForm] = useState({ name:'', phone:'', email:'', message:''});

  const handle = (e) => setForm(v=>({ ...v, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent('Website Enquiry');
    window.location.href = `mailto:info@asandco.example?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section">
      <div className="container">
        <div className="center">
          <h1 className="title-accent">Contact Us</h1>
          <p className="muted mt-2">Tell us your requirement and we’ll respond quickly.</p>
        </div>

        <form className="form mt-6 space-y" onSubmit={submit}>
          <div className="grid grid-2">
            <div className="field">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" className="input" required value={form.name} onChange={handle} />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" className="input" required inputMode="tel" value={form.phone} onChange={handle} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" className="input" value={form.email} onChange={handle} />
          </div>
          <div className="field">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" className="textarea" rows={6} placeholder="Eg. Need 300 centering sheets and 50 props from Monday" value={form.message} onChange={handle} />
          </div>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <button className="btn primary btn-3d" type="submit">Send Email</button>
            <a className="btn outline secondary" href="tel:+919443142580">Call 94431 42580</a>
          </div>
        </form>

        <div className="card card-3d mt-10">
          <h3>Reach Us</h3>
          <div className="muted mt-2">Tiruppur, Tamil Nadu • Phone: 94431 42580</div>
          <a className="btn mt-4" href="https://www.google.com/maps/search/?api=1&query=A.S.%20%26%20Co%20Tiruppur" target="_blank" rel="noreferrer">Open in Google Maps</a>
        </div>
      </div>
    </section>
  );
}
