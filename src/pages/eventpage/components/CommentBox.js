import React, { Component } from 'react';


class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }

  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault();

    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();

    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment };

      // Publish comment
      /*global Ably*/
      const channel = Ably.channels.get('comments');
      channel.publish('add_comment', commentObject, err => {
        if (err) {
          console.log('Unable to publish message; err = ' + err.message);
        }
      });

      // Clear input fields
      e.target.elements.comment.value = '';
      e.target.elements.name.value = '';
    }
  }

  render() {
    return (
      <div className="row-white">
        <form className="col s12" onSubmit={this.addComment}>
          <div className="row">
            <div className="input-field col s12">
              <input id="" type="text" className="input" name="name" placeholder="Nome" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea className="materialize-textarea" name="comment" placeholder="Comentário"></textarea>
            </div>
          </div>
          <div className="row center">
            <button className="btn red darken-1">Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;
