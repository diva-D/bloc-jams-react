import React, { Component } from 'react';

class PlayerBar extends Component {
    render() {
        return <section className="player-bar">
            <section id="buttons">
                <button id="previous" onClick={this.props.handlePrevClick}>
                    <ion-icon name="skip-backward" />
                </button>
                <button id="play-pause" onClick={this.props.handleSongClick}>
                    <ion-icon name={this.props.isPlaying ? "pause" : "play"} />
                </button>
                <button id="next" onClick={this.props.handleNextClick}>
                    <ion-icon name="skip-forward" />
                </button>
            </section>
            <section id="time-control">
                <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                <input 
                    type="range" 
                    className="seek-bar" 
                    value={ (this.props.currentTime / this.props.duration) || 0 } 
                    max="1"
                    min="0"
                    step="0.01"
                    onChange={this.props.handleTimeChange}
                />
                <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
            </section>
            <section id="volume-control">
                <ion-icon name="volume-low" />
                <input 
                    type="range" 
                    className="seek-bar" 
                    value={this.props.volume || 0} 
                    max="1"
                    min="0"
                    step="0.1"
                    onChange={this.props.handleVolumeChange}
                />
                <ion-icon name="ion-volume-high" />
            </section>
          </section>;
    }
}

export default PlayerBar;