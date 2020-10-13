import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser, faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import navStyles from './nav.module.scss'

export default function Nav() {
    return (
        <nav>
            <ul className={navStyles.nav}>
                <li className={navStyles.nav_item}>
                    <Link href="/works">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon icon={faBriefcase} />
                            <p className={navStyles.nav_item_name}>Works</p>
                        </a>
                    </Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/about">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon icon={faUser} />
                            <p className={navStyles.nav_item_name}>About</p>
                        </a>
                    </Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/blogs">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon icon={faBlog} />
                            <p className={navStyles.nav_item_name}>Blog</p>
                        </a>
                    </Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/contacts">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className={navStyles.nav_item_name}>Contact</p>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
