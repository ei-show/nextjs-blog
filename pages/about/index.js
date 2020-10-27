import Head from 'next/head'
import Layout from '../../components/layout'

import indexStyles from './index.module.scss'

export default function Index() {
    return (
        <Layout pageTitle={'Contact'}>
            <Head>
            </Head>
            <p>foo</p>
        </Layout>
    )
}
