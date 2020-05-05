import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card white">
            <div className="card-content black-text">
              <span className="card-title">{this.props.comment.name}</span>
              <p className="grey-text text-darken-2">{this.props.comment.comment}
                <span className="right">100</span>
                <i className="red-text right material-icons">thumb_up</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
