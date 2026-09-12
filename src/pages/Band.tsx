import { Link } from 'react-router-dom'

export function Band() {
  return <>
    <section className="page-hero"><div className="wrap"><p className="eyebrow">Since 1963</p><h1>2nd Rossendale Scout Band</h1><p className="lead">A complete music pathway from first notes to public performance, with opportunities for young players and adult learners.</p><div className="actions"><Link className="btn primary" to="/contact">Ask about joining</Link></div></div></section>
    <section className="section"><div className="wrap"><p className="eyebrow">Our bands</p><h2>Learn at your level</h2><div className="band-list"><BandCard title="Training Band" text="For beginners learning the basics of reading and playing music, supported by individual tuition." time="Saturday · 9:00–9:45am"/><BandCard title="Junior Band" text="Develop ensemble skills, technique and confidence while continuing tuition." time="Saturday · 9:45–10:30am"/><BandCard title="Senior Band" text="The main performing band, appearing at concerts and events across the region and beyond." time={'Saturday · 10:45am–12:00pm\nWednesday · 7:30–9:30pm'}/><BandCard title="Silver Band" text="A friendly band for adult learners, including parents and grandparents of younger members." time="Monday · 7:30–8:45pm"/></div></div></section>
    <section className="section muted-section"><div className="wrap"><p className="eyebrow">Band pages</p><h2>More from the band</h2><div className="card-grid"><article className="card"><h3>Engagements</h3><p>Use this area for concerts, Whit Friday appearances and community events.</p></article><article className="card"><h3>Recordings</h3><p>Add album artwork, recordings and purchase information here.</p></article><article className="card"><h3>Gallery</h3><p>A future home for band tours, events and archive photographs.</p></article></div></div></section>
  </>
}

function BandCard({ title, text, time }: { title: string; text: string; time: string }) {
  return <article><h3>{title}</h3><p>{text}</p><strong className="pre-line">{time}</strong></article>
}
