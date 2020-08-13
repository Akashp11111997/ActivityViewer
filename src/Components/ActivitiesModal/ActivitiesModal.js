import React, { Component } from 'react';
import moment from 'moment-timezone/builds/moment-timezone-with-data';
import { Button, Modal, Table } from 'react-bootstrap';
import ActivityCheck from './ActivityCheck';
import DateSelector from '../DateSelector/DateSelector';

class ActivitiesModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterDate: ''
    }
  };

  handleDateValue = (selectedDate) => {
    this.setState({
      filterDate: moment(selectedDate)
    })
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.realname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DateSelector handleDate={this.handleDateValue} ></DateSelector>
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Login</th>
                <th>Log Out</th>
              </tr>
            </thead>
            <tbody>
              {this.props.activities.map((activity, index) => (
                <ActivityCheck key={index} index={index} activity={activity} timezone={this.props.timezone} filterDate={this.state.filterDate}></ActivityCheck>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal >
    );
  }
}
export default ActivitiesModal;