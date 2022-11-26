import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{padding: '2rem', maxWidth: '800px', margin:'0 auto'}}>
      <h1><Link style={{color: 'white'}}href="/">mindportals</Link></h1>
      <main>{children}</main>
    </div>
  )
}
