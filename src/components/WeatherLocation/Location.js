import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//const Location = (props) => {
// const Location = ({city}) => {
//     //destructuring
//     //const {city} = props;
//     //const city = props.city;
//     return (<div><h1>{city}</h1></div>);
// };
const Location = ({city}) => (
    <div className="locationCont">
        <h1>{city}</h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;