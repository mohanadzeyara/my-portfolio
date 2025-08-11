import Link from 'next/link'

export default function About() {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h1>About Me</h1>
      <p>
        Hello — I'm Mohand, a Medizintechnik (Medical Engineering) student at FAU. I enjoy building simple prototypes that solve real problems,
        learning embedded systems, and experimenting with 3D printing for medical devices.
      </p>
      <p>Skills: basic electronics, 3D printing, prototyping, teamwork.</p>
      <Link href="/">← Back</Link>
    </div>
  )
}
