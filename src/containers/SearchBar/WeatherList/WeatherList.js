import React from "react";
import {connect} from 'react-redux';
import Chart from '../../../components/Chart/Chart';
import classes from './WeathetList.css';
import GoogleMap from '../../../components/GoogleMap/GoogleMap';

const WeatherList = (props) => {
    const renderWeather=(cityData)=> {
        const temps = cityData.list.map(temp=>temp.main.temp-273.15);
        const pressure = cityData.list.map(pressure=>pressure.main.pressure);
        const humidity = cityData.list.map(humidity=>humidity.main.humidity);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        return (
            <tr key={Math.random()}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                   <Chart data={temps} color="red"/>
                </td>
                <td>
                   <Chart data={pressure} color="green"/>
                </td>
                <td>
                   <Chart data={humidity} color="grey"/>
                </td>

            </tr>
        );
    };
  return (
    <table className="table table-hover">
        <thead>
            <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
            </tr>
        </thead>
        <tbody>
            {props.weather.map(renderWeather)}
        </tbody>
    </table>
  )
};
const mapStateToProps=state=> {
    return {
        weather: state.weather
    }
}
export default connect(mapStateToProps)(WeatherList);
