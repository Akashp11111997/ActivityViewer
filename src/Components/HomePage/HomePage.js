import React, { Component } from 'react';
import Member from '../Member/Member';
import './HomePage.css';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            ok: false
        }
    };

    componentDidMount() {
        this.getMembersData();
    }


    getMembersData() {
        axios.get('assets/samplejson/test.json').then(response => {
            this.setState({
                members: response.data.members,
                ok: response.data.ok
            })
        })
    };

    render() {
        const { ok, members } = this.state;
        if (!ok) {
            return <div>Loading</div>
        } else {
            return (
                <Container className="container">
                    <Row xs={1} md={2}>
                        {members.map(member => (
                            <Member
                                key={member.id}
                                id={member.id}
                                realname={member.real_name}
                                timezone={member.tz}
                                activities={member.activity_periods} />
                        ))}
                    </Row>
                </Container>
            )
        }
    }
}

export default HomePage;