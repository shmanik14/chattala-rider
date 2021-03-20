import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mapImage from '../../images/Map.png';
import fakeData from '../../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    const {riderType} = useParams();

    let result = fakeData.find(vehicle => vehicle.riderType === riderType);
    console.log(result)
    const {img, title,capacity, price} = result;

    return (
        <div className="common">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="search-result">
                            <h4><strong>Riding with {title} <img src={img} alt=""/></strong></h4>
                            <div className="destination">
                                <p>Agrabad</p>
                                <p>To</p>
                                <p>GEC Circle</p>
                            </div>
                            <ul>
                            <li><img src={img} alt=""/>  {title} <FontAwesomeIcon icon={faUserFriends} /> {capacity} <span>${price}</span></li>
                            <li><img src={img} alt=""/>  {title} <FontAwesomeIcon icon={faUserFriends} /> {capacity} <span>${price}</span></li>
                            <li><img src={img} alt=""/>  {title} <FontAwesomeIcon icon={faUserFriends} /> {capacity} <span>${price}</span></li>
                            </ul>
                            <ul>
                                {/* <li><img className="image" src={img} alt="" width="40px"/><span>{title}</span> <span>{capacity}</span><span className="price">$ {price}</span> </li> */}
                                {/* <li><img className="image" src={result[0].img} alt="" width="40px"/><span>{result[0].title}</span> <span>{result[0].capacity}</span><span className="price">$ {result[0].price}</span> </li>
                                <li><img className="image" src={result[0].img} alt="" width="40px"/><span>{result[0].title}</span> <span>{result[0].capacity}</span><span className="price">$ {result[0].price}</span> </li> */}
                            </ul>
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

export default Destination;