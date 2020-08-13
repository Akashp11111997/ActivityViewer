import React from 'react';
import moment from 'moment-timezone';

const ActivityCheck = (props) => {

    var activityStartDate = moment.tz(moment(props.activity.start_time, "MMM DD YYYY HH:mma"), props.timezone);
    var selectedDate = props.filterDate

    if (!props.filterDate) {
        selectedDate = moment(new Date()).tz(props.timezone);
    } else {
        selectedDate = (props.filterDate)
    }
    if (selectedDate.isSame(activityStartDate, 'day')) {
        return (
            <tr>
                <td>{props.activity.start_time}</td>
                <td>{props.activity.end_time}</td>
            </tr>
        )
    } else {
        return null
    }
}
export default ActivityCheck;