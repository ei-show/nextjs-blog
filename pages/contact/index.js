import Head from 'next/head'
import Layout from '../../components/layout'
import App from './app'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import indexStyles from './index.module.scss'

export default function Index() {
    return (
        <Layout pageTitle={'Contact'}>
            <Head>
            </Head>
            <App />
        </Layout>
    )
}
