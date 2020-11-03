
import defaultDataset from './dataset.js'
// import './assets/styles/style.css'

import {AnserwsList} from '../index.jsx'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            cats: [],
            currentId: "init",
            dataset: defaultDataset,
            open: false,
        }
    }
    render() {
        return (
            <section className="c-section">
                <div className="c-box">
                    <AnswersList />
                </div>
            </section>
        )
    }
}
