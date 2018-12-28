import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const srtComponents = cities => (
    cities.map(city => <WeatherLocation key={city} city={city} />)
);

const LocationList = ({ cities }) => (
    //console.log(cities);
    <div>
        { srtComponents(cities) }
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;