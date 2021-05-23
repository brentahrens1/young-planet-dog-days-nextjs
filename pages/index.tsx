import Head from 'next/head'
import Home from '../components/Home/Home'

export default function App() {
  return (
    <main className="site-container">
      <Head>
        <title>Young Planet | Dog Days</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Dog Days EP now available on all streaming platforms." />
      </Head>
      <Home />
    </main>
  )
}
