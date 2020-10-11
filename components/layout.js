import Head from 'next/head'
import Link from 'next/link'

// import styles from './layout.module.css'
import Header from '../components/header'

const siteTitle = 'Offiter'

export default function Layout({pageTitle, children}) {
  return (
    <>
      <Head>
        {pageTitle ? 
          <title>{pageTitle} | {siteTitle}</title>
          :
          <title>{siteTitle}</title>
        }
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header siteTitle={siteTitle}/>

      <nav>
        <ul class="nav">
          <li class="nav_item"><a class="nav_item_link" href="#">
            <i class="fas fa-2x fa-fw fa-briefcase my_gray"></i>
            <p class="nav_item_name">Works</p>
          </a></li>
          <li class="nav_item"><a class="nav_item_link" href="#">
            <i class="fas fa-2x fa-fw fa-user my_gray"></i>
            <p class="nav_item_name">About</p>
          </a></li>
          <li class="nav_item"><a class="nav_item_link" href="#">
            <i class="fas fa-2x fa-fw fa-blog my_gray"></i>
            <p class="nav_item_name">Blog</p>
          </a></li>
          <li class="nav_item"><a class="nav_item_link" href="#">
            <i class="fas fa-2x fa-fw fa-envelope my_gray"></i>
            <p class="nav_item_name">Contact</p>
          </a></li>
        </ul>
      </nav>

      <main>{children}</main>

      <footer>
        <ul class="footer_sns">
          <li class="footer_sns_item"><a href="#" class=""><i class="fab fa-2x fa-fw fa-instagram-square my_gray"></i></a></li>
          <li class="footer_sns_item"><a href="#" class=""><i class="fab fa-2x fa-fw fa-twitter-square my_gray"></i></a></li>
          <li class="footer_sns_item"><a href="#" class=""><i class="fab fa-2x fa-fw fa-facebook-square my_gray"></i></a></li>
          <li class="footer_sns_item"><a href="#" class=""><i class="fab fa-2x fa-fw fa-github-square my_gray"></i></a></li>
        </ul>
        <p class="copyright"><small>&copy;2020 uchikakoi-eishou</small></p>
      </footer>

    </>
  )
}