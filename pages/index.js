import Head from 'next/head'
import Link from 'next/link'
import indexStyles from './index.module.scss'
import Layout from '../components/layout'

export default function Index() {
    return (
        <Layout>
            <Head>
            </Head>
            <div class="main_message">
                <p>簡単にサービスを提供できる時代。</p>
                <p>そのお手伝いをさせてください。</p>
                <p>私達はツールに過ぎません。</p>
                <p>主役はあなたです。</p>
            </div>
            <h2 class="main_title">サービス内容</h2>
            <div class="container">
                <div class="card">
                    <p class="card_title_jp">ディレクション</p>
                    <h3 class="card_title">Direction</h3>
                    <i class="card_icon fas fa-4x fa-fw fa-headset my_gray"></i>
                    <div class="card_message">
                        <p>これがないとデザインへは進めません。</p>
                        <p>ヒアリングで問題点や目的を明確化。</p>
                        <p>効果的なプランを提案します。</p>
                        <p>大事なのは情報共有です。</p>
                    </div>
                </div>
                <div class="card">
                    <p class="card_title_jp">デザイン</p>
                    <h3 class="card_title">Design</h3>
                    <i class="card_icon fas fa-4x fa-fw fa-edit my_gray"></i>
                    <div class="card_message">
                        <p>ここで大まかな青果物が決まります。</p>
                        <p>問題は目的を達成できているか。</p>
                        <p>一緒に解決していきましょう。</p>
                        <p>第1印象はデザインです。</p>
                    </div>
                </div>
                <div class="card">
                    <p class="card_title_jp">コーディング</p>
                    <h3 class="card_title">Coding</h3>
                    <i class="card_icon fas fa-4x fa-fw fa-code my_gray"></i>
                    <div class="card_message">
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
