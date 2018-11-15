import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import AlbumCard from './AlbumCard';
import { Container, Row, Col, Table } from 'reactstrap';

class Album extends Component {
    constructor(props) {
        super(props);
        
        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: album.songs[0],
            isPlaying: false,
            isHover: false,
            songHover: 0,
            currentTime: 0,
            duration: album.songs[0].duration,
            volume: "0.5",
        };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
        this.audioElement.volume = this.state.volume;
    }

    componentDidMount() {
        this.eventListeners = {
            timeupdate: e => {
                this.setState({currentTime: this.audioElement.currentTime});
            },
            durationchange: e => {
                this.setState({ duration: this.audioElement.duration });
            },
            volumechange: e => {
                this.setState({ volume: this.audioElement.volume });
            }
        };
        
        this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
        this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
    }

    componentWillUnmount() {
        this.audioElement.src = null;
        this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
        this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
    }

    play() {
        this.audioElement.play();
        this.setState({ isPlaying: true });
    }
    
    pause() {
        this.audioElement.pause();
        this.setState({ isPlaying: false });
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song });
    }

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause();
        } else {
            if (!isSameSong) { this.setSong(song); }
            this.play();
        }
    }

    handlePrevClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.max(0, currentIndex - 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }
    
    handleNextClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.min(this.state.album.songs.length - 1, currentIndex + 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }

    handleTimeChange(e) {
        const newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime });
    }

    handleVolumeChange(e) {
        const newVolume = this.audioElement.volume + (e.target.value - this.audioElement.volume);
        this.audioElement.volume = newVolume;
        this.setState({ volume: newVolume });
    }

    handleMouseEnter(index) {
        this.setState({ isHover: true, songHover: index });
    }

    handleMouseLeave(index) {
        this.setState({ isHover: false, songHover: index });
    }
    
    formatTime(time) {
        const mins = Math.trunc(time / 60);
        const secs = Math.trunc(time - (60 * mins));
        return (`${mins}:${secs < 10 ? '0' + secs : secs}` || "-:--");
    }

    render() {
        return (
            <Container className="album">
                <Row id="album-info">
                    <Col md="4">
                    </Col>
                    <Col md="4">
                        <AlbumCard album={this.state.album} library={false} />
                    </Col>
                    <Col md="4">
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
                <Table className="table-hover" id="song-list">
                    <colgroup>
                        <col id="song-number-column" />
                        <col id="song-title-column" />
                        <col id="song-duration-column" />
                    </colgroup>
                    <thead className="thead-dark">
                        <th>#</th>
                        <th>Title</th>
                        <th>Duration</th>
                    </thead>
                    <tbody>
                        {this.state.album.songs.map( (song, index) => {
                            return (
                                <tr className="song" 
                                    key={index} 
                                    onClick={() => this.handleSongClick(song)} 
                                    onMouseEnter={() => this.handleMouseEnter(index)}
                                    onMouseLeave={() => this.handleMouseLeave(index)}
                                >
                                    <td>
                                        { (this.state.isHover && this.state.songHover === index && this.state.currentSong !== song) 
                                            ? <ion-icon name="play"/> 
                                            : (this.state.currentSong === song && this.state.isPlaying)
                                                ? <ion-icon name="pause"/>
                                                : (this.state.currentSong === song && this.state.isPlaying === false)
                                                    ? <ion-icon name="play" />
                                                    : index + 1}
                                    </td>
                                    <td>
                                    {song.title}
                                    </td>
                                    <td>
                                    {this.formatTime(song.duration)}
                                    </td>
                              </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <PlayerBar 
                    isPlaying={this.state.isPlaying} 
                    currentSong={this.state.currentSong} 
                    handleSongClick={() => this.handleSongClick(this.state.currentSong)}    
                    handlePrevClick={() => this.handlePrevClick()}
                    handleNextClick={() => this.handleNextClick()}
                    handleTimeChange={(e) => this.handleTimeChange(e)}
                    handleVolumeChange={(e) => this.handleVolumeChange(e)}
                    currentTime={this.audioElement.currentTime}
                    duration={this.audioElement.duration}
                    volume={this.audioElement.volume}
                    formatTime={(time) => this.formatTime(time)}
                />
            </Container>
        );
    }
}

export default Album;