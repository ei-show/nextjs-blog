import Head from 'next/head'

import Header from './header'
import Nav from './nav'
import Footer from './footer'

import layoutStyles from './layout.module.scss'

const siteTitle = 'Offiter'

export default function Layout({ pageTitle, children }) {
  return (
    <div className={layoutStyles.body}>
      <Head>
        <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header siteTitle={siteTitle} />
      <Nav />
      <main className={layoutStyles.main}>{children}</main>
      <Footer />
    </div>
  )
}