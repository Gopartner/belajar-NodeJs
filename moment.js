import React  from 'react';
import Moment from 'react-moment';



export default class Moment extends React.Component {
    render() {
        return (
            <Moment interval={30000}>
                1976-04-19T12:59-0500
            </Moment>
        );
    }
}
