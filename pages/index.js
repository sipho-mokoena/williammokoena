import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cheers!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">
        👨‍💻 Site is undergoing maintainance but you can find me here<code><a href='mailto:contact@williammokoena.com'>contact@williammokoena.com</a></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
