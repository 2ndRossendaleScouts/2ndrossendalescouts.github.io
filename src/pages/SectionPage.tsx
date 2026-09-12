import { Link } from 'react-router-dom'

const sections = {
  beavers: { age: 'Ages 6–8', title: 'Beavers', lead: 'Games, making things, outdoor activities, nature, visits and new friendships for our youngest Scout section.', time: 'Tuesday · 6:00–7:00pm', leader: 'Emma Ratcliffe' },
  cubs: { age: 'Ages 8–10½', title: 'Cubs', lead: 'Skills, badges, trips, camps and plenty of hands-on activities for young people ready for their next challenge.', time: 'Tuesday · 7:00–8:00pm', leader: 'Catherine Smyth' },
  scouts: { age: 'Ages 10½–14', title: 'Scouts', lead: 'Teamwork, camping, cooking, survival skills, creative challenges and adventure for young people aged 10½ to 14.', time: 'Tuesday · 7:45–9:00pm', leader: 'Ewan Brown' },
} as const

type SectionKey = keyof typeof sections

export function SectionPage({ section }: { section: SectionKey }) {
  const data = sections[section]
  return <>
    <section className="page-hero"><div className="wrap"><span className="pill">{data.age}</span><p className="eyebrow">2nd Rossendale {data.title}</p><h1>{data.title}</h1><p className="lead">{data.lead}</p><div className="actions"><Link className="btn primary" to="/contact">Enquire about joining</Link></div></div></section>
    <section className="section"><div className="wrap two-col"><div><p className="eyebrow">Weekly meetings</p><h2>What to expect</h2><p>Our {data.title} programme combines fun, friendship, practical skills and opportunities to try something new. Add section-specific activities, badges, upcoming events and photos here as the site grows.</p><div className="detail-grid"><div className="detail-card"><h3>Meeting time</h3><p><strong>{data.time}</strong></p></div><div className="detail-card"><h3>Section leader</h3><p><strong>{data.leader}</strong></p></div></div></div><aside className="info-panel"><h3>Page image placeholder</h3><div className="gallery-placeholder">Replace with a {data.title} photo</div><p className="small">Replace this component with an image when your photography is ready.</p></aside></div></section>
    <section className="section muted-section"><div className="wrap"><p className="eyebrow">Activities</p><h2>What we get up to</h2><div className="card-grid"><article className="card"><h3>Skills</h3><p>Practical, age-appropriate skills and badge work.</p></article><article className="card"><h3>Adventure</h3><p>Outdoor activities, visits and new experiences.</p></article><article className="card"><h3>Friendship</h3><p>Games and teamwork in a friendly, supportive group.</p></article></div></div></section>
  </>
}
