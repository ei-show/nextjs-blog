
import '../styles/reset.scss';
import '../styles/global.scss';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faYoutube } from '@fortawesome/free-regular-svg-icons';
// import { faYoutube } from '@fortawesome/free-solid-svg-icons';
// import { faYoutube } from '@fortawesome/f';
import {
    faHeadset,
    faEdit,
    faCode,
    faBriefcase,
    faUser,
    faBlog,
    faEnvelope,
    faWindowMaximize,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(
    faHeadset,
    faEdit,
    faCode,
    faBriefcase,
    faUser,
    faBlog,
    faEnvelope,
    faWindowMaximize,
    faWifi,
    faYoutube,
);

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}