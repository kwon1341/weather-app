import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class WeatherButton extends Component {
    render() {
        return (
            <div>
                <Button variant="warning">Current Location</Button>
                <Button variant="warning">Paris</Button>
                <Button variant="warning">LA</Button>
            </div>
        );
    }
}

export default WeatherButton;
