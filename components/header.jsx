import Link from 'next/link'
import headerStyles from './header.module.scss'

export default function Header({ siteTitle }) {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.header_title}>
                <Link href="/">
                    <a className={headerStyles.header_title_link}>{siteTitle}</a>
                </Link>
            </h1>
            <div className={headerStyles.header_img}>
                <p className={headerStyles.keyvisual}>もっとITを</p>
            </div>
        </header>
    )
}
