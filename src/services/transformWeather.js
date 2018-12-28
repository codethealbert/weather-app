import convert from 'convert-units';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../constans/weather';

const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(1));
}

const getWeatherState = weather =>{ //ID que se recibe desde la API
    const { id } = weather;
    if(id < 300){
        return THUNDER;
    }
    else if(id < 400){
        return DRIZZLE;
    }
    else if(id < 600){
        return RAIN;
    }
    else if(id < 700){
        return SNOW;
    }
    else if(id === 800){
        return SUN;
    }
    else {
        return CLOUD;
    }
    
}

const transformWeather = weather_data => {
    const {humidity, temp } = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]); //.weather es una propiedad que viene desde la API. El resultado es el ID que da como resultado de ese arreglo weather
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }

    return data;
}

export default transformWeather;