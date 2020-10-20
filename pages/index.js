import Head from 'next/head'
import Layout from '../components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import indexStyles from './index.module.scss'

export default function Index() {
    return (
        <Layout>
            <Head>
            </Head>

            <div className={indexStyles.main_message}>
                <p>簡単にサービスを提供できる時代。</p>
                <p>そのお手伝いをさせてください。</p>
                <p>私達はツールに過ぎません。</p>
                <p>主役はあなたです。</p>
            </div>
            <div className={indexStyles.container}>
                <div className={indexStyles.container_header}>
                    <p className={indexStyles.container_title_jp}>提供できること</p>
                    <h2 className={indexStyles.container_title}>\Service/</h2>
                </div>
                <div className={indexStyles.card}>
                    <div className={indexStyles.card_header}>
                        <FontAwesomeIcon className={indexStyles.card_header_icon} icon="window-maximize" size="2x" fixedWidth />
                        <div className={indexStyles.card_header_right}>
                            <p className={indexStyles.card_title_jp}>WEB制作</p>
                            <h3 className={indexStyles.card_title}>WebProduction</h3>
                        </div>
                    </div>
                    <div className={indexStyles.card_main}>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td scope="row">LP</td>
                                    <td>5,000円～</td>
                                </tr>
                                <tr>
                                    <td>webサイト</td>
                                    <td>30,000円～</td>
                                </tr>
                                <tr>
                                    <td>WordPress</td>
                                    <td>50,000円～</td>
                                </tr>
                                <tr>
                                    <td>webアプリケーション</td>
                                    <td>100,000円～</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={indexStyles.card}>
                    <div className={indexStyles.card_header}>
                        <FontAwesomeIcon className={indexStyles.card_header_icon} icon="window-maximize" size="2x" fixedWidth />
                        <div className={indexStyles.card_header_right}>
                            <p className={indexStyles.card_title_jp}>インフラ</p>
                            <h3 className={indexStyles.card_title}>Infrastructure</h3>
                        </div>
                    </div>
                    <div className={indexStyles.card_main}>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td scope="row">LP</td>
                                    <td>5,000円～</td>
                                </tr>
                                <tr>
                                    <td>webサイト</td>
                                    <td>30,000円～</td>
                                </tr>
                                <tr>
                                    <td>WordPress</td>
                                    <td>50,000円～</td>
                                </tr>
                                <tr>
                                    <td>webアプリケーション</td>
                                    <td>100,000円～</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={indexStyles.card}>
                    <div className={indexStyles.card_header}>
                        <FontAwesomeIcon className={indexStyles.card_header_icon} icon="window-maximize" size="2x" fixedWidth />
                        <div className={indexStyles.card_header_right}>
                            <p className={indexStyles.card_title_jp}>WEB制作</p>
                            <h3 className={indexStyles.card_title}>WebProduction</h3>
                        </div>
                    </div>
                    <div className={indexStyles.card_main}>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td scope="row">LP</td>
                                    <td>5,000円～</td>
                                </tr>
                                <tr>
                                    <td>webサイト</td>
                                    <td>30,000円～</td>
                                </tr>
                                <tr>
                                    <td>WordPress</td>
                                    <td>50,000円～</td>
                                </tr>
                                <tr>
                                    <td>webアプリケーション</td>
                                    <td>100,000円～</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={indexStyles.container}>
                <div className={indexStyles.container_header}>
                    <p className={indexStyles.container_title_jp}>大切なこと</p>
                    <h2 className={indexStyles.container_title}>\Important/</h2>
                </div>
                <div className={indexStyles.card}>
                    <div className={indexStyles.card_header}>
                        <FontAwesomeIcon className={indexStyles.card_header_icon} icon="headset" size="2x" fixedWidth />
                        <div className={indexStyles.card_header_right}>
                            <p className={indexStyles.card_title_jp}>ディレクション</p>
                            <h3 className={indexStyles.card_title}>Direction</h3>
                        </div>
                    </div>
                    <div className={indexStyles.card_main}>
                        <p>これがないとデザインへは進めません。</p>
                        <p>ヒアリングで問題点や目的を明確化。</p>
                        <p>効果的なプランを提案します。</p>
                        <p>大事なのは情報共有です。</p>
                    </div>
                </div>
                <div className={indexStyles.card}>
                    <div className={indexStyles.card_header}>
                        <FontAwesomeIcon className={indexStyles.card_header_icon} icon="edit" size="2x" fixedWidth />
                        <div className={indexStyles.card_header_right}>
                            <p className={indexStyles.card_title_jp}>デザイン</p>
                            <h3 className={indexStyles.card_title}>Design</h3>
                        </div>
                    </div>
                    <div className={indexStyles.card_main}>
                        <p>ここで大まかな青果物が決まります。</p>
                        <p>問題は目的を達成できているか。</p>
                        <p>一緒に解決していきましょう。</p>
                        <p>第1印象はデザインです。</p>
                    </div>
                </div>
                <div className={indexStyles.card}>
                    <div className={indexStyles.card_header}>
                        <FontAwesomeIcon className={indexStyles.card_header_icon} icon="code" size="2x" fixedWidth />
                        <div className={indexStyles.card_header_right}>
                            <p className={indexStyles.card_title_jp}>コーディング</p>
                            <h3 className={indexStyles.card_title}>Coding</h3>
                        </div>
                    </div>
                    <div className={indexStyles.card_main}>
                        <p>ただのコーディングではありません。</p>
                        <p>作業者目線で逆提案もあります。</p>
                        <p>カンプをもとに実際に作成。</p>
                        <p>効果的な動きも導入。</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
