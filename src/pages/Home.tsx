import { Link } from 'react-router-dom'

export function Home() {
  return <>
    <section className="hero"><div className="wrap hero-grid"><div><p className="eyebrow">Scouting &amp; music in Bacup since 1910</p><h1>Adventure, friendship and music in Rossendale.</h1><p className="lead">2nd Rossendale brings together Beavers, Cubs, Scouts and a long-running brass band programme from our headquarters on Burnley Road, Bacup.</p><div className="actions"><a className="btn primary" href="#sections">Explore our sections</a><Link className="btn secondary" to="/contact">Get in touch</Link></div></div><div className="hero-art" aria-hidden="true"><div className="badge badge-scout">⚜</div><div className="badge badge-music">♫</div><div className="ridge r1"></div><div className="ridge r2"></div></div></div></section>
    <section id="sections" className="section"><div className="wrap"><p className="eyebrow">Our Scout sections</p><h2>Find the right section</h2><p className="section-intro">Each section has its own page with meeting information and room for section news, activities and photos.</p><div className="card-grid">
      <SectionCard age="Ages 6–8" name="Beavers" copy="Games, making things, outdoor activities, nature, visits and new friendships." time="Tuesday · 6:00–7:00pm" to="/beavers" />
      <SectionCard age="Ages 8–10½" name="Cubs" copy="Skills, badges, trips, camps, music and plenty of hands-on activities." time="Tuesday · 7:00–8:00pm" to="/cubs" />
      <SectionCard age="Ages 10½–14" name="Scouts" copy="Teamwork, camping, cooking, survival skills, creative challenges and adventure." time="Tuesday · 7:45–9:00pm" to="/scouts" />
    </div></div></section>
    <section className="section feature"><div className="wrap feature-grid"><div><p className="eyebrow">2nd Rossendale Scout Band</p><h2>Learn, rehearse and perform</h2><p>From beginners to experienced performers, our band programme gives young people and adults a place to develop their musicianship.</p><div className="actions"><Link className="btn primary light" to="/band">Explore the Band</Link></div></div><div className="info-panel dark-panel"><h3>Band rehearsals</h3><p><strong>Training Band:</strong> Saturday 9:00–9:45am</p><p><strong>Junior Band:</strong> Saturday 9:45–10:30am</p><p><strong>Senior Band:</strong> Saturday 10:45am–12:00pm &amp; Wednesday 7:30–9:30pm</p><p><strong>Silver Band:</strong> Monday 7:30–8:45pm</p></div></div></section>
    <section className="section"><div className="wrap two-col"><div><p className="eyebrow">About us</p><h2>Rooted in Rossendale</h2><p>The group was formed in Bacup in 1910. Music became a major part of the group when the Scout Band was formed in 1963.</p><p>Today the headquarters supports weekly Scouting, music lessons, rehearsals and performances for children, young people and adult musicians.</p></div><aside className="fact-panel"><h3>At a glance</h3><dl><div><dt>Founded</dt><dd>1910</dd></div><div><dt>Scout Band</dt><dd>Since 1963</dd></div><div><dt>Location</dt><dd>Bacup, Lancashire</dd></div><div><dt>Charity</dt><dd>1061708</dd></div></dl></aside></div></section>
  </>
}

function SectionCard({ age, name, copy, time, to }: { age: string; name: string; copy: string; time: string; to: string }) {
  return <article className="card"><span className="pill">{age}</span><h3>{name}</h3><p>{copy}</p><p className="time">{time}</p><Link className="card-link" to={to}>Visit {name} →</Link></article>
}
