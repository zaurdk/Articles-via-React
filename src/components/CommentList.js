import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.props.isOpen) this.toggleComments();
    }

    render() {        
        if (this.props.comments !== undefined)  {    
        var comms = Object.keys(this.props.comments).map(key => this.props.comments[key]);
        }        
        if (comms !== undefined)  { 
            var commentsElements = this.state.isOpen && comms.map((comment) =>
                <li key = {comment.id}>
                    <Comment comment = {comment}/>
                </li>
            )
        var commentCount = Object.keys(this.props.comments).length;
        }
       
        return (
            <ul style={{'list-style': 'none'}}>
                <div className="text-muted">
                    Comments: {commentCount}
                </div>
                {commentsElements}
            </ul>           
        )
    }

    toggleComments() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}


export default CommentList