import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { latitud: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {

                //In this line we call setState
                this.setState({
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    //React says we need to define render
    render() {
        if (this.state.errorMessage && !this.state.latitud) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.latitud) {
            return <div>Latitude: {this.state.latitud}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);