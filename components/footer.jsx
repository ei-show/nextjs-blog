import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare,faTwitterSquare,faFacebookSquare,faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function footer() {
    return (
        <footer>
            <ul class="footer_sns">
                <li class="footer_sns_item"><a href="#" class=""><i class="fab fa-2x fa-fw fa-instagram-square my_gray"></i></a></li>
                <li class="footer_sns_item"><a href="#" class=""><i class="fab fa-2x fa-fw fa-twitter-square my_gray"></i></a></li>
                <li class="footer_sns_item"><a href="#" class=""><i class="fab fa-2x fa-fw fa-facebook-square my_gray"></i></a></li>
                <li class="footer_sns_item"><a href="#" class=""><i class="fab fa-2x fa-fw fa-github-square my_gray"></i></a></li>
            </ul>
            <p class="copyright"><small>&copy;2020 uchikakoi-eishou</small></p>
        </footer>

    )
}
