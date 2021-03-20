import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mapImage from '../../images/Map.png'
import { useHistory } from 'react-router-dom';


const Book = () => {
    const {riderType} = useParams();
    const history = useHistory()
    
    return (
        <div className="common">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="search-ride">
                            <label htmlFor="pick-from">Pick From</label>
                            <input type="text" name="pick-from"/>
                            <label htmlFor="pick-To">Pick To</label>
                            <input type="text" name="pick-To"/>
                            {/* <button className="rider-btn"><link to={`/destination/${riderType}`}> */}
                                 {/* Search {riderType} </link></button> */}
                            <Link to={`/destination/${riderType}`}>Search {riderType} </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <div>
                            <img src={mapImage} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Book;