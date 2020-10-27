import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import navStyles from './nav.module.scss'

export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.nav_items}>
                <li className={navStyles.nav_item}>
                    <Link href="/work">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon className={navStyles.nav_item_icon} icon="briefcase" size="lg" fixedWidth />
                            <p className={navStyles.nav_item_name}>Work</p>
                        </a>
                    </Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/about">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon className={navStyles.nav_item_icon} icon="user" size="lg" fixedWidth />
                            <p className={navStyles.nav_item_name}>About</p>
                        </a>
                    </Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/blog">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon className={navStyles.nav_item_icon} icon="blog" size="lg" fixedWidth />
                            <p className={navStyles.nav_item_name}>Blog</p>
                        </a>
                    </Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/contact">
                        <a className={navStyles.nav_item_link}>
                            <FontAwesomeIcon className={navStyles.nav_item_icon} icon="envelope" size="lg" fixedWidth />
                            <p className={navStyles.nav_item_name}>Contact</p>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
