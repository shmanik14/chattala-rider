import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mapImage from '../../images/Map.png'
import fakeData from '../../data/data.json'

const Destination = () => {
    const [rider,setRider] = useState([]);
    useEffect(() => {
        fetch({fakeData})
          .then((res) => res)
          .then(data => setRider(data))
    }, []);
    const {riderType} = useParams();

    const result = rider.filter(vehicle => vehicle.riderType === riderType);
    console.log(rider)
    console.log(result[0])
    console.log(riderType)

    return (
        <div className="common">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="search-result">
                            <ul>
                                <li><img className="image" src={result[0].img} alt="" width="40px"/><span>{result[0].title}</span> <span>{result[0].capacity}</span><span className="price">$ {result[0].price}</span> </li>
                                <li><img className="image" src={result[0].img} alt="" width="40px"/><span>{result[0].title}</span> <span>{result[0].capacity}</span><span className="price">$ {result[0].price}</span> </li>
                                <li><img className="image" src={result[0].img} alt="" width="40px"/><span>{result[0].title}</span> <span>{result[0].capacity}</span><span className="price">$ {result[0].price}</span> </li>
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