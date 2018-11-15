import React, { Component } from "react";
import { Container, Row, Col, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import albumData from './../data/albums';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: albumData
        };
    }
    render() {
        return (
            <Container className="library">
                <Row>
                    <Col>
                        <h1 className="display-1 shadow-red-lg">Library</h1> 
                    </Col>
                </Row>
                <Row>   
                    {this.state.albums.map((album, index) => (
                        <Col md="4" className="offset-md-1">
                            <NavLink to={`/album/${album.slug}`} key={index} tag={RRNavLink}>
                                <AlbumCard album={album} library={true} />
                                {/* <Card className="text-center box-shadow h-100">
                                    <CardImg top src={album.albumCover} alt={album.title} />
                                    <CardBody className="shadow-red-sm">
                                        <CardTitle className="display-4">{album.title}</CardTitle>
                                        <CardSubtitle>{album.artist}</CardSubtitle>
                                        <CardText>{album.songs.length} songs</CardText>
                                    </CardBody>
                                </Card> */}
                            </NavLink>
                        </Col>
                    ))}
                </Row>    
            </Container>
        );
    }
}
export default Library;