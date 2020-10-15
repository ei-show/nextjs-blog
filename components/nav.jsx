import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faBriefcase, faUser, faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import navStyles from './nav.module.scss'

export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.nav_items}>
                <li className={navStyles.nav_item}>
                    <Link href="/works">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon className={navStyles.nav_item_icon} icon={faBriefcase} />
                            <p className={navStyles.nav_item_name}>Works</p>
                        </a>
                    </Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/about">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon className={navStyles.nav_item_icon} icon={faUser} />
                            <p className={navStyles.nav_item_name}>About</p>
                        </a>
                    </Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/blogs">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon className={navStyles.nav_item_icon} icon={faBlog} />
                            <p className={navStyles.nav_item_name}>Blog</p>
                        </a>
                    </Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/contacts">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon className={navStyles.nav_item_icon} icon={faEnvelope} />
                            <p className={navStyles.nav_item_name}>Contact</p>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
