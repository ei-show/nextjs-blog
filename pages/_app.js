import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare, faTwitterSquare, faFacebookSquare, faGithubSquare, } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faInstagramSquare, faTwitterSquare, faFacebookSquare, faGithubSquare,)

import '../styles/reset.scss'
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}