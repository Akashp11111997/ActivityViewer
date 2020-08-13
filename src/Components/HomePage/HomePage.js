import React, { Component } from 'react';
import Member from '../Member/Member';
import { CardColumns } from 'react-bootstrap';
import './HomePage.css';
import axios from 'axios';

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
                <div>
                    <center>
                 <CardColumns className="Cards">
                    {members.map(member => (
                        <Member
                            key={member.id}
                            id={member.id}
                            realname={member.real_name}
                            timezone={member.tz}
                            activities={member.activity_periods} />
                    ))}
                 </CardColumns>
                 </center>
                </div>
            )
        }
    }
}

export default HomePage;