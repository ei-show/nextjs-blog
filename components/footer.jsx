import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare, faTwitterSquare, faFacebookSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import footerStyles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.sns_items}>
        <li className={footerStyles.sns_item}>
          <Link href="/"><a>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a></Link>
        </li>
        <li className={footerStyles.sns_item}>
          <Link href="/"><a>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a></Link>
        </li>
        <li className={footerStyles.sns_item}>
          <Link href="/"><a>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a></Link>
        </li>
        <li className={footerStyles.sns_item}>
          <Link href="/"><a>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a></Link>
        </li>
      </ul>
      <p className={footerStyles.copyright}>
        <small>&copy;2020 uchikakoi-eishou</small>
      </p>
    </footer>
  );
}
