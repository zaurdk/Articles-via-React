
import React, {PureComponent} from 'react'
import CommentList from './CommentList'

class Article extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    render() {
        const {article, isOpen, onButtonClick} = this.props
        const style = {width: '70%'}
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style = {style}>
                <div className="card-header">
                    <h2 onClick = {this.incrementCounter}>
                        {article.title}
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()} clicked {this.state.count}
                    </h6>
                    {body}
                </div>
                <CommentList 
                    comments = {article.comments}
                    isOpen = {isOpen}
                    />
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}


export default Article