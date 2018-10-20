import React, {Component} from 'react'
import articles from '../fixtures'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        Something useless articles
                        <button className="btn float-right" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles = {this.state.reverted ? articles.reverse() : articles}/>
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.setState.reverted
    })
}

export default App;
