import Link from 'next/link'

export async function getServerSideProps() {
  // Server-side rendered sample data — fulfils SSR requirement for the assignment.
  const projects = [
    {
      id: 1,
      title: 'Heart Rate Monitor Prototype',
      description: 'Simple heart rate monitor using Arduino and a pulse sensor, with basic filtering and LCD output.'
    },
    {
      id: 2,
      title: '3D-Printed Prosthetic Hand (concept)',
      description: 'Low-cost prosthetic design focusing on function and affordability using 3D-printed parts.'
    }
  ]

  return { props: { projects } }
}

export default function Projects({ projects }) {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h1>Projects</h1>
      <p style={{fontStyle: 'italic'}}>Rendered server-side with <code>getServerSideProps</code>.</p>
      <ul>
        {projects.map(p => (
          <li key={p.id}><strong>{p.title}</strong> — {p.description}</li>
        ))}
      </ul>
      <Link href="/">← Back</Link>
    </div>
  )
}
