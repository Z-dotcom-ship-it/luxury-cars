import './globals.css';

const cars = [
  { name: 'Aurelia GT', type: 'Grand tourer', price: 'From $1,290 / day', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90' },
  { name: 'Velar S', type: 'Luxury SUV', price: 'From $980 / day', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=90' },
  { name: 'Nocturne 12', type: 'Supercar', price: 'From $2,400 / day', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=90' }
];

export default function Home() {
  return (
    <main>
      <nav>
        <a className="brand" href="#"><span>AV</span> AURELIS</a>
        <div className="nav-links">
          <a href="#collection">Collection</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#collection">Reserve <b>↗</b></a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><i /> THE ART OF ARRIVAL</p>
          <h1>Exceptional cars.<br /><em>Unforgettable</em> journeys.</h1>
          <p className="intro">Discover a curated collection of the world&apos;s most coveted automobiles, delivered wherever your next story begins.</p>
          <div className="actions">
            <a className="primary" href="#collection">Explore collection <span>→</span></a>
            <a className="text-link" href="#experience"><b>▶</b> Discover our world</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1800&q=92" alt="Luxury sports car at sunset" />
          <div className="edition"><small>THE PRIVATE COLLECTION</small><strong>01 — 26</strong></div>
        </div>
      </section>

      <section id="collection" className="collection">
        <div className="section-heading">
          <div><p className="eyebrow"><i /> THE COLLECTION</p><h2>Icons, selected for <em>you.</em></h2></div>
          <a className="outline" href="#collection">View all vehicles <span>↗</span></a>
        </div>
        <div className="grid">
          {cars.map((car, index) => (
            <article className="card" key={car.name}>
              <div className="card-image"><img src={car.image} alt={car.name} /><span>0{index + 1}</span></div>
              <div className="card-info"><div><p>{car.type}</p><h3>{car.name}</h3></div><div className="price"><small>{car.price}</small><b>↗</b></div></div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience">
        <p className="eyebrow"><i /> BEYOND THE DRIVE</p>
        <h2>Every detail,<br /><em>considered.</em></h2>
        <p>From the moment you enquire to the moment you arrive, our concierge team ensures an experience as remarkable as the car itself.</p>
        <a className="primary" href="#contact">Our concierge <span>→</span></a>
      </section>

      <footer id="contact">
        <a className="brand" href="#"><span>AV</span> AURELIS</a>
        <p>Private motoring, beautifully arranged.</p>
        <a href="mailto:concierge@aurelis.com">concierge@aurelis.com</a>
      </footer>
    </main>
  );
}
