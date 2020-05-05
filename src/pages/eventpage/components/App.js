import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Comments from './Comments';
import Live from './Live';
import NavBar from './NavBar';
import Footer from './Footer';
import Participantes from './Participantes'


class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      comments: []
    }
  }
  
  componentDidMount() {
    /* global Ably */
    const channel = Ably.channels.get('comments');

    channel.attach();
    channel.once('attached', () => {
      channel.history((err, page) => {
        /* create a new array with comments */
        const comments = Array.from(page.items, item => item.data);

        this.setState({ comments });

        /* subscribe to new comments */
        channel.subscribe((msg, err) => {
          const commentObject = msg['data'];
          this.handleAddComment(commentObject);
        });
      });
    });
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: [comment].concat(prevState.comments)
      };
    });
  }

  render() {
    return (
      <div class="row">
        <NavBar />
        <div class="col s4">        
        <h4><strong>Perguntas</strong></h4>
        
          <div className="comments">
            <Comments comments={this.state.comments} />
          </div>
          <CommentBox handleAddComment={this.handleAddComment} />
        </div>
        <div class="col s6">
          <Live />
        </div>
        <div class="col s2">
          <Participantes />
        </div>        
        
        <div class="col s12">
        <Footer />        
        </div>        
      </div>
    );
  }
}

export default App;