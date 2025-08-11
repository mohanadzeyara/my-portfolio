import Link from 'next/link'

export default function Contact() {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h1>Contact</h1>
      <p>Email: <a href="mailto:mohand@example.com">mohand@example.com</a> (replace with your real email)</p>
      <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/mohandzeyara</a></p>
      <Link href="/">← Back</Link>
    </div>
  )
}
