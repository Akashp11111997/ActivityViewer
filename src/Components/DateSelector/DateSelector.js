import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  };

  handleChange = (newDate) => {
    this.props.handleDate(newDate);
    return this.setState({ date: newDate });
  }

  render() {
    return (
      <div>
        Filter by Date: <DatePicker onChange={this.handleChange} value={this.state.date} />
      </div>
    );
  }
}
export default DateSelector;