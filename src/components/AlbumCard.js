import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const AlbumCard = (props) => {
    return (
        <Card className="text-center box-shadow h-100">
            <CardImg top src={props.album.albumCover} alt={props.album.title} />
            <CardBody className="shadow-red-sm">
                <CardTitle className="display-4">{props.album.title}</CardTitle>
                <CardSubtitle>{props.album.artist}</CardSubtitle>
                { props.library 
                    ? <CardText>{props.album.songs.length} songs</CardText>
                    : <CardText>{props.album.releaseInfo}</CardText>
                }
            </CardBody>
        </Card>
    );
};

export default AlbumCard;