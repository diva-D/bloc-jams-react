import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class PlayerBar extends Component {
    render() {
        return (
            <Container className="player-bar">
                <Row id="buttons">
                    <Col>
                        <Button id="previous" onClick={this.props.handlePrevClick}>
                            <ion-icon name="skip-backward" />
                        </Button>
                        <Button id="play-pause" onClick={this.props.handleSongClick}>
                            <ion-icon name={this.props.isPlaying ? "pause" : "play"} />
                        </Button>
                        <Button id="next" onClick={this.props.handleNextClick}>
                            <ion-icon name="skip-forward" />
                        </Button>
                    </Col>
                </Row>      
                <Row id="time-control" className="align-items-center">
                    <Col>
                        <div className="current-time text-right">{this.props.formatTime(this.props.currentTime)}</div>
                    </Col>
                    <Col>
                        <input 
                            type="range" 
                            className="seek-bar form-control-range" 
                            value={ (this.props.currentTime / this.props.duration) || 0 } 
                            max="1"
                            min="0"
                            step="0.01"
                            onChange={this.props.handleTimeChange}
                        />
                    </Col>
                    <Col>
                        <div className="total-time text-left">{this.props.formatTime(this.props.duration)}</div>
                    </Col>
                </Row>
                <Row id="volume-control">
                    <Col xs="4">
                    </Col>
                    <Col xs="1" className="text-right">
                        <ion-icon name="volume-low" />
                    </Col>
                    <Col xs="2">
                        <input 
                            type="range" 
                            className="seek-bar form-control-range" 
                            value={this.props.volume || 0} 
                            max="1"
                            min="0"
                            step="0.1"
                            onChange={this.props.handleVolumeChange}
                        />
                    </Col>
                    <Col xs="1" className="text-left">
                        <ion-icon name="volume-high" />
                    </Col>
                    <Col xs="4">
                    </Col>
                </Row>
          </Container>
        );
    }
}

export default PlayerBar;