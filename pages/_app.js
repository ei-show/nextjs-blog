import '../styles/reset.scss'
import '../styles/global.scss'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
    faHeadset,
    faEdit,
    faCode,
    faBriefcase,
    faUser,
    faBlog,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
    faHeadset,
    faEdit,
    faCode,
    faBriefcase,
    faUser,
    faBlog,
    faEnvelope,
);

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}