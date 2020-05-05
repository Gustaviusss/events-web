import React from 'react';
import YouTube from 'react-youtube';

class Live extends React.Component {
    render() {
        const opts = {
            height: '490',
            width: '790',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        return <YouTube videoId="iA4a8NPQmJ8" opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
export default Live;
