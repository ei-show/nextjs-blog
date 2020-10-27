// common_css
import '../styles/reset.scss';
import '../styles/global.scss';

// fontAwesome
import { config, library } from '@fortawesome/fontawesome-svg-core';
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
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
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

// material_ui
// import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
// import 'https://fonts.googleapis.com/icon?family=Material+Icons';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}