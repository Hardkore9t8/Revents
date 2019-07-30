import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const actions = {
  incrementCounter,
  decrementCounter
};
const mapState = state => ({
  data: state.test.data
});
class TestComponent extends Component {
  state = {
    latlng: {
        lat: 26.1420358,
        lng: -81.7948103
    }
  };
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          latlng: latLng
        });
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
        <br />
        <br />
        <TestPlaceInput selectAddress={this.handleSelect}/>
        <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng}/>
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
