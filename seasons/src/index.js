import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

    state = { latitud: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitud: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message })
        );
    }

    //React says we need to define render
    render() {
        if (this.state.errorMessage && !this.state.latitud) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.latitud) {
            return <SeasonDisplay lat={this.state.latitud}/>
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);