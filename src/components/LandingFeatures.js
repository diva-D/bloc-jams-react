import React from 'react';
import { Container, Row, Col} from 'reactstrap';

const LandingFeatures = () => {
    return (
        <Container>
            <Row>
                <Col md="4" sm="12" className="point">
                    <img className="point-img" src="/assets/images/icons8-musical-notes-64.png" alt="music note" />
                    <h2 className="point-title">Choose your music</h2>
                    <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
                </Col>
                <Col md="4" sm="12" className="point">
                    <img className="point-img" src="/assets/images/icons8-ok-64.png" alt="happy face" />
                    <h2 className="point-title">Unlimited, streaming, ad-free</h2>
                    <p className="point-description">No arbitrary limits. No distractions.</p>
                </Col>
                <Col md="4" sm="12" className="point">
                    <img className="point-img" src="/assets/images/icons8-touchscreen-64.png" alt="mobile touchscreen" />
                    <h2 className="point-title">Mobile enabled</h2>
                    <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingFeatures;