import '../styles/reset.scss'
import '../styles/global.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeadset, faEdit, faCode } from "@fortawesome/free-solid-svg-icons";

library.add(faHeadset, faEdit, faCode);

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}