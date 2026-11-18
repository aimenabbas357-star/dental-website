import { useState } from 'react'
import './App.css'

const photos = {
  hero: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1100&q=85',
  whitening: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=85',
  implant: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=85',
  filling: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=85',
  surgery: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=700',
  crown: 'https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=700',
  care: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=85',
  dentist: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1100&q=85',
  patient: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1100&q=85',
  consultation: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85',
  reviewer: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=85',
}

const treatments = [
  { title: 'Teeth Whitening', image: photos.whitening, tone: 'butter', description: 'A brighter smile, made easy with safe and gentle whitening.' },
  { title: 'Dental Implant', image: photos.implant, tone: 'blush', description: 'A confident, lasting solution that feels just like you.' },
  { title: 'Teeth Fillings', image: photos.filling, tone: 'mint', description: 'Restore your teeth with natural-looking, comfortable care.' },
  { title: 'Oral Surgery', image: photos.surgery, tone: 'peach', description: 'Thoughtful expert care for a healthier, happier mouth.' },
  { title: 'Crown and Bridges', image: photos.crown, tone: 'mint', description: 'Bring strength, comfort and your smile back together.' },
  { title: 'Periodontal Care', image: photos.care, tone: 'butter', description: 'Gentle gum care to keep your smile healthy for years.' },
]

const benefits = [
  ['Care that starts with listening', 'We take the time to understand your needs, goals and concerns.'],
  ['A gentle touch, always', 'Modern techniques and a kind team make every visit more comfortable.'],
  ['The latest dental technology', 'Thoughtful tools help us make treatment precise and stress-free.'],
  ['Your whole smile, in one place', 'From routine checkups to restorative care, we’re here for it all.'],
  ['Clear, honest recommendations', 'We explain every option so you can feel good about your care.'],
]

const testimonials = [
  {
    quote: '“From the moment I walked in, I felt completely at ease. The team is so warm and thoughtful, and I finally have a smile I love showing off.”',
    name: 'Sarah Mitchell',
    location: 'Samundri, Pakistan',
  },
  {
    quote: '“The whole experience was wonderful. Everything was explained so clearly, and my visit was more comfortable than I ever expected.”',
    name: 'Olivia Bennett',
    location: 'Samundri, Pakistan',
  },
  {
    quote: '“I used to dread dental appointments. Now I actually look forward to seeing this lovely team. I couldn’t recommend them more.”',
    name: 'Emily Parker',
    location: 'Samundri, Pakistan',
  },
]

function Icon({ name, size = 20 }) {
  const paths = {
    tooth: <path d="M12 3.2c-1.6 0-2.7 1-4.1 1S5.4 3.5 4.4 4.8c-2.1 2.8.2 6.4 1.2 8.3 1 1.8 1.1 6.1 2.7 6.1 1.2 0 1.5-4.1 3.7-4.1s2.5 4.1 3.7 4.1c1.6 0 1.7-4.3 2.7-6.1 1-1.9 3.3-5.5 1.2-8.3-1-1.3-2.1-.6-3.5-.6S13.6 3.2 12 3.2Z" />,
    sparkle: <><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
    shield: <><path d="M12 3 19 6v5c0 4.6-2.8 8.2-7 10-4.2-1.8-7-5.4-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    facebook: <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9a1 1 0 0 1 1-1Z" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 3a14 14 0 0 1-7-7l3-2-2-5Z" />,
  }
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function Logo({ light = false }) {
  return (
    <a className={`logo${light ? ' logo-light' : ''}`} href="#home" aria-label="Evergreen Dental home">
      <span className="logo-mark"><Icon name="tooth" size={27} /><i /></span>
      <span className="logo-copy">evergreen<span>dental studio</span></span>
    </a>
  )
}

function ButtonLink({ children, href, outline = false }) {
  return <a className={`button${outline ? ' button-outline' : ''}`} href={href}>{children}{!outline && <Icon name="arrow" size={17} />}</a>
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <Logo />
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>
        <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#why-us" onClick={closeMenu}>Why Choose Us</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a className="nav-contact" href="#consultation" onClick={closeMenu}>Contact Us <Icon name="arrow" size={15} /></a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const features = [
    { icon: 'sparkle', title: 'Free Consultation', note: 'Your first visit is on us', color: 'icon-peach' },
    { icon: 'tooth', title: 'Expert Dentist', note: 'Care you can count on', color: 'icon-lilac' },
    { icon: 'star', title: 'Highly Rated', note: 'Loved by our community', color: 'icon-yellow' },
    { icon: 'shield', title: 'Modern Equipment', note: 'The best of dental care', color: 'icon-mint' },
  ]
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-line" /> A LITTLE MORE REASON TO SMILE</span>
            <h1>Dental excellence starts here: <em>your guide to a brighter, healthier smile.</em></h1>
            <p>Thoughtful care, a gentle touch, and a team that puts you first. Your happiest, healthiest smile starts with us.</p>
            <div className="hero-actions"><ButtonLink href="#consultation">Booking Now</ButtonLink><span className="hero-note">New patients always welcome</span></div>
            <div className="hero-trust"><div className="avatar-stack"><img src={photos.reviewer} alt="" /><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="" /><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=80" alt="" /></div><div><span className="trust-stars">★★★★★</span><span className="trust-caption">Trusted by 2,000+ smiling patients</span></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-blob" />
            <div className="hero-image-frame"><img src={photos.hero} alt="Smiling patient enjoying a healthy, confident smile" /></div>
            <div className="hero-sticker"><span>5.0</span><span className="sticker-stars">★★★★★</span><small>patient rating</small></div>
            <span className="hero-scribble" aria-hidden="true">✳</span>
          </div>
        </div>
        <div className="feature-cards">
          {features.map((feature) => <div className="feature-card" key={feature.title}><span className={`feature-icon ${feature.color}`}><Icon name={feature.icon} size={19} /></span><span className="feature-text"><strong>{feature.title}</strong><small>{feature.note}</small></span></div>)}
        </div>
      </div>
    </section>
  )
}

function Treatments() {
  return (
    <section className="section treatments-section" id="services">
      <div className="container">
        <div className="section-heading centered"><span className="eyebrow">HOW WE CAN HELP</span><h2>The best dental <em>treatment.</em></h2><p>Everything your smile needs, delivered with care that feels personal.</p></div>
        <div className="treatment-grid">
          {treatments.map((treatment, index) => <article className={`treatment-card ${treatment.tone}`} key={treatment.title}>
            <div className="treatment-copy"><span className="treatment-number">0{index + 1} / DENTAL CARE</span><h3>{treatment.title}</h3><p>{treatment.description}</p><a className="text-link" href="#consultation" aria-label={`Learn more about ${treatment.title}`}>Explore treatment <Icon name="arrow" size={16} /></a></div>
            <div className="treatment-image"><img src={treatment.image} alt={`${treatment.title} dental care`} loading="lazy" /></div>
          </article>)}
        </div>
        <div className="treatments-foot"><span>Not sure what you need?</span><a href="#consultation">Let’s figure it out together <Icon name="arrow" size={16} /></a></div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-photo"><img src={photos.dentist} alt="Dentist providing attentive, gentle care to a patient" loading="lazy" /></div>
          <div className="about-caption"><span className="caption-mark"><Icon name="tooth" size={20} /></span><span><strong>Here for your smile.</strong><small>And everything behind it.</small></span></div>
          <div className="dot-pattern" aria-hidden="true" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">A DIFFERENT KIND OF DENTAL VISIT</span>
          <h2>Patient-centered care, <em>down to the details.</em></h2>
          <p className="about-intro">We believe a great dental visit should feel less like an appointment and more like being cared for by people who know you.</p>
          <div className="mission-block"><span className="mission-icon"><Icon name="sparkle" size={19} /></span><div><h3>Our mission</h3><p>To make exceptional dental care feel easy, personal and genuinely something to smile about—for every patient, every time.</p></div></div>
          <ButtonLink href="#why-us">Learn More</ButtonLink>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="container why-layout">
        <div className="why-copy">
          <span className="eyebrow">GOOD PEOPLE. GREAT CARE.</span>
          <h2>Comprehensive dental services, <em>with a little more heart.</em></h2>
          <p className="why-intro">A healthier smile is personal. So is the care we give you.</p>
          <ul className="benefit-list">{benefits.map(([title, description]) => <li key={title}><span className="checkmark">✓</span><span><strong>{title}</strong><small>{description}</small></span></li>)}</ul>
          <a className="text-link why-link" href="#consultation">Get to know our care <Icon name="arrow" size={16} /></a>
        </div>
        <div className="why-visual"><img src={photos.patient} alt="Patient smiling after a visit to Evergreen Dental Studio" loading="lazy" /><div className="why-note"><span className="why-note-icon"><Icon name="sparkle" size={19} /></span><span><strong>Feel good about your care.</strong><small>That’s our kind of dentistry.</small></span></div><span className="why-image-label">YOUR SMILE LOOKS GOOD ON YOU</span></div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonial = testimonials[activeIndex]
  const changeSlide = (direction) => setActiveIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  return (
    <section className="testimonials-section" id="testimonials">
      <svg className="testimonial-map" aria-hidden="true" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice">
        <g>
          <path d="m93 108 28-29 36-8 20 12 27-1 18 18 35 3 19 21-13 18-21 7-7 23-19 12-10 24-19 6-14 24-17-2-9-24-17-11-8-25-19-8-8-24-21-9-8-22-20-5-5-19 18-8Z" />
          <path d="m251 247 22 11 15 20-3 22 13 19-4 30-12 22-3 31-13 21-10 30-12-8-7-35-16-26-5-27-15-24 2-23 13-21 5-27 15-14Z" />
          <path d="m516 121 18-15 25 3 11 13-9 13-21 4-17-6-7-12Z" />
          <path d="m533 159 24-16 29 5 19 15 6 24 18 22-3 29-17 26-9 32-18 30-10 37-18 16-14-19-5-31-16-22-4-29-13-21 4-30 15-27-3-24 14-17Z" />
          <path d="m585 111 40-24 46 3 28-17 48 9 23 20 43-2 23 17 53-2 26 18 36-2 20 18-16 20-38 2-22 14-32-3-20 15-29-4-14 17-24-6-14-24-26-3-19-19-34 3-27-16-28 4-21-19-31 3-20-15-29 1-13-16Z" />
          <path d="m796 193 28-13 28 8 21 21-10 20-26 8-20-13-19-12-2-19Z" />
          <path d="m881 305 31-16 39 5 18 20-10 23-29 13-34-7-18-17 3-21Z" />
          <path d="m1053 352 21-7 16 12-4 20-22 4-14-12 3-17Z" />
          <path d="m1035 146 12-8 12 7-2 13-15 2-7-14Z" />
        </g>
      </svg>
      <div className="container testimonial-content">
        <span className="eyebrow">KIND WORDS, BIG SMILES</span>
        <h2>What people say <em>about us.</em></h2>
        <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
        <div className="quote-wrap"><button className="slider-arrow" type="button" onClick={() => changeSlide(-1)} aria-label="Previous testimonial">←</button><blockquote key={testimonial.quote}>{testimonial.quote}</blockquote><button className="slider-arrow" type="button" onClick={() => changeSlide(1)} aria-label="Next testimonial">→</button></div>
        <div className="reviewer"><img src={photos.reviewer} alt="" /><span><strong>{testimonial.name}</strong><small><Icon name="pin" size={13} /> {testimonial.location}</small></span></div>
        <div className="slider-dots" aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}>{testimonials.map((item, index) => <button key={item.name} type="button" className={index === activeIndex ? 'active' : ''} aria-label={`Show testimonial from ${item.name}`} onClick={() => setActiveIndex(index)} />)}</div>
      </div>
    </section>
  )
}

function Consultation() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
    event.currentTarget.reset()
  }
  return (
    <section className="consultation-section" id="consultation">
      <div className="container">
        <div className="consultation-card">
          <div className="consultation-image"><img src={photos.consultation} alt="Friendly dentist ready to welcome you for a consultation" loading="lazy" /><span className="consult-photo-note">A good first step<br /><strong>starts with a hello.</strong></span></div>
          <div className="consultation-content"><span className="eyebrow">LET’S MAKE YOU SMILE</span><h2>Free consultation, <em>no pressure.</em></h2><p>Tell us a little about yourself. We’ll be in touch to find a time that works for you.</p>
            <form className="consultation-form" onSubmit={handleSubmit}>
              <label>Full Name<input name="name" type="text" placeholder="Your name" autoComplete="name" required /></label>
              <label>I’m Interested In<select name="interest" defaultValue="" required><option value="" disabled>Select a treatment</option>{treatments.map((treatment) => <option key={treatment.title}>{treatment.title}</option>)}<option>Not sure yet</option></select></label>
              <label>Email<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
              <label>Phone Number<input name="phone" type="tel" placeholder="(555) 000-0000" autoComplete="tel" required /></label>
              <button className="button form-submit" type="submit">Get a Free Consultation <Icon name="arrow" size={17} /></button>
              {submitted && <p className="form-success" role="status">Thanks for reaching out! We’ll be in touch soon.</p>}
            </form>
            <small className="form-privacy">Your information stays private. No spam, ever.</small>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubscribed(true)
    event.currentTarget.reset()
  }
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand"><Logo light /><p>A brighter smile and a better kind of dental visit. That’s the Evergreen promise.</p><div className="social-links"><a href="https://www.instagram.com/" aria-label="Instagram"><Icon name="instagram" /></a><a href="https://www.facebook.com/" aria-label="Facebook"><Icon name="facebook" /></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Icon name="linkedin" /></a></div></div>
          <div className="footer-column"><h3>Company</h3><a href="#about">About us</a><a href="#why-us">Our approach</a><a href="#testimonials">Patient stories</a><a href="#consultation">Contact</a></div>
          <div className="footer-column"><h3>Explore</h3><a href="#services">Our services</a><a href="#services">General dentistry</a><a href="#services">Cosmetic dentistry</a><a href="#consultation">Book a visit</a></div>
          <div className="footer-column footer-contact"><h3>Come say hello</h3><p><Icon name="pin" size={17} /> Samundri<br /><span>Pakistan</span></p><a href="tel:03487346074"><Icon name="phone" size={16} /> 03487346074</a><a href="mailto:aimenabbas357@gmail.com"><Icon name="mail" size={16} /> aimenabbas357@gmail.com</a></div>
          <div className="footer-newsletter"><h3>A little something to smile about.</h3><p>Good tips, happy smiles. A few lovely notes in your inbox.</p><form onSubmit={handleSubscribe}><label className="sr-only" htmlFor="newsletter-email">Your email address</label><input id="newsletter-email" name="email" type="email" placeholder="Your email address" required /><button type="submit" aria-label="Subscribe to newsletter"><Icon name="arrow" size={18} /></button></form>{subscribed && <small className="newsletter-success" role="status">You’re on the list. Thanks for joining!</small>}</div>
        </div>
        <div className="footer-bottom"><span>© 2025 Evergreen Dental Studio. All smiles reserved.</span><span><a href="#home">Privacy</a><a href="#home">Accessibility</a></span><a className="back-top" href="#home">Back to top ↑</a></div>
      </div>
    </footer>
  )
}

function App() {
  return <><Navbar /><main><Hero /><Treatments /><About /><WhyChooseUs /><Testimonials /><Consultation /></main><Footer /></>
}

export default App
