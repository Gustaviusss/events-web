import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  render() {
    return (
      <div>
        {
          this.props.comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />
          })
        }
      </div>
    );
  }
}

export default Comments;
