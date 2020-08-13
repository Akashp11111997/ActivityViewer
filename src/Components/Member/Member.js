import React from 'react';
import ActivitiesModal from '../ActivitiesModal/ActivitiesModal';
import { Button, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './Member.css';

const Member = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Col lg>
            <Card className="card">
                <Card.Header>{props.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.realname}</Card.Title>
                    <Card.Text>
                        <cite>{props.timezone}</cite>
                    </Card.Text>
                    <Button variant="primary" onClick={() => setModalShow(true)}>View Activities</Button>
                </Card.Body>
                <ActivitiesModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    activities={props.activities}
                    timezone={props.timezone}
                    realname={props.realname}
                />
            </Card>
        </Col>
    )
}
export default Member;