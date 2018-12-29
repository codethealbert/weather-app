import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';



const LocationList = ({ cities, onSelectedLocation }) => {
    //console.log(cities);
    const handleWeatherLocationClick = city =>{
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const srtComponents = cities => (
        cities.map(city => (
            <WeatherLocation 
                key={city} 
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)} 
            />))
    );

    return (<div>
        { srtComponents(cities) }
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;