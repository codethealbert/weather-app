import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgess from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
//import {api_weather} from './../../constans/api_url';
import getUrlWeather from './../../services/getUrlWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


//COMPONENTE FUNCIONAL
// const WeatherLocation = () => (
//     <div className="weatherLocationCont">
//         <Location city={"Barcelona"}></Location>
//         <WeatherData data={data}></WeatherData>
//     </div>
// );
class WeatherLocation extends Component{ //COMPONENTE CLASS

    constructor(props){
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null,
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    
    handleUpdateClick = () => {
        const api_weather = getUrlWeather(this.state.city);
        fetch(api_weather)
            .then( resolve => {
                //console.log(resolve);
                
                return resolve.json();
            }).then( data => {
                //console.log(data);
                console.log("handleUpdateClick");
                const newWeather = transformWeather(data);
                console.log(newWeather);
                
                this.setState({
                    data: newWeather
                });
                
            });
        //console.log("Actualizado");
        
    }

    render (){
        console.log("render");
        const {city, data} = this.state;
        return (<div className="weatherLocationCont">
                    <Location city={city}></Location>
                    { data ? 
                        <WeatherData data={data}></WeatherData> :
                        <CircularProgess />
                    }
                </div>);
    }
}
WeatherLocation.propType = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;