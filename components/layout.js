import Head from 'next/head'
import Link from 'next/link'

// import styles from './layout.module.css'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

const siteTitle = 'Offiter'

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header siteTitle={siteTitle} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}