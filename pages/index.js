import Link from 'next/link';
import Head from 'next/head';
import PageLoadHandler from './components/PageLoadHandler';


export default function Home() {
  return (
    <PageLoadHandler>
      <Head>
        <title>My Dynamic Blog</title>
        <meta name="description" content="A simple blog using Next.js dynamic routing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem' }}>
          Welcome to My Blog!
        </h1>

        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
          Check out our first post.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/posts/1" style={{
              fontSize: '1.1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0070f3',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none'
            }}>
            Go to Post 1
          </Link>
        </div>
      </main>
    </PageLoadHandler>
  );
}