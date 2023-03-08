import React, { useState } from 'react'

/*
 * Mock Weather API functions
 */
function fetchWeatherData() {
    return {
        temp: 80,
        humidity: 70,
        //aqi: 85,
        hourly: "N/A"
    }
}

function getUserLocation() {
  return "94303"
}

function getAqiFromZip(zip) {
  return Math.floor(Math.random() * 50) + 50
}

/*
 * WeatherDashboard Functional Component
 * takes no props
 * "parent" component of Thermometer, AQI, etc
 */ 
export default class WeatherDashboard extends React.Component {
    constructor(props) {
        super(props)
        const data = fetchWeatherData()
        this.state = {
            frequency: 60,
            temp: data.temp
        }
    }
    // event handler function, passed as props
    // to the Temperature component
    updateTemperature = (newTemp) => {
        console.log(`new temp =${newTemp}`)
        this.setState({
            // frequency: this.state.frequency,
            temp: newTemp
        })
    }
    // another "noop" event handler function
    fakeUpdateTemperature(e) {
        return // do nothing
    }

    render() {
        const { temp } = this.state
        const humidity = 95
        const hourly = 2
        return (
            <div>
                {/* composing multiple instaces of the same Temperature component */}
                <Thermometer temp={temp} onSubmit={this.updateTemperature} color={"yellow"} age={42}/> 
                <Thermometer temp={temp} onSubmit={this.updateTemperature}/>
                <Thermometer temp={temp} onSubmit={this.fakeUpdateTemperature}/>
                <Humidity humidity={humidity} />
                <HourlyForecast hourly={hourly}/>
            </div>
        )
    }
}

/*
 * Thermometer Functional Component
 * (i.e. a React Component represented as a function)
 * takes props `temp` and `onSubmit` as parameters
 */ 
function Thermometer({ temp, onSubmit }) {
    const [inputValue, updateInputValue] = useState(null)
    function inputUpdate(evt) {
        updateInputValue(evt.target.value)
    }
    return (
        <React.Fragment>
            <div>Temp is {temp > 100 ? "uh oh" : temp}</div>
            <input value={inputValue} onChange={inputUpdate} />
            <button onClick={() => onSubmit(inputValue)}>Submit</button>
        </React.Fragment>
    )
}

function HourlyForecast() {
    return <div>TODO</div>
}

function Humidity() {
    return <div>TODO</div>
}

/*
 * AQI Functional Component
 * receives `updateFrequency` as props
 * maintains `aqi` as part of its state
 */
function AQI({ updateFrequency }) {
    /* 
     * useState() gets a value and its update function from component state (memory)
     * remember: "getter" and "setter"!
     *
     * from tictactoe:
     * const [squares, setSquares] = useState(Array(9))
     */

    // const [aqi, setAqi] = useState(95)
    // console.log(aqi) // 95
    // setAqi(100)
    // console.log(aqi) // 100
    // //get user zipcode
    // const zipcode = getUserLocation()
    // // get aqi based on zipcode
    // const localAqi = getAqiFromZip(zipcode)
    // if (localAqi != undefined) {
    //     setAqi(localAqi)
    // } else {
    //     setAqi(95)
    // }

    return (
        <div>AQI is 95</div>
    )
}
