import React, {Component} from 'react'

class Comment extends Component {

    render() {
        const {comment} = this.props        
        
        return (
                <div>                    
                    <blockquote>
                    {comment.user}:<br/>
                    <small> {comment.text}</small>
                    </blockquote>
                </div>
        )
    }

}


export default Comment