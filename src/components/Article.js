import React, {Component} from 'react';

class Article extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: props.defaultOpen
        }
    }

    componentWillMount() {
        console.log('mounting');
    }

    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>;
        return (
            <div className="card mx-auto" style={{width: '70%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                            <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                                {this.state.isOpen ? 'close' : 'open'}
                            </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
      }
}



export default Article;