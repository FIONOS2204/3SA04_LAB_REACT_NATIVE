import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native"
import { useState, useEffect } from 'react';

import Forecast from './Forecast';

export default function Weather(props){
        useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=89b6cc5abffc11c37c735486e081fc0f`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
        .catch((error) => {
            console.warn(error);
        });
 }
 }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        main: "-",
        description: '-',
temp: 0
})
return (<View>
    <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
    <Text>Zip Code</Text>
    <Text>{props.zipCode}</Text>
    <Forecast {...forecastInfo} />
    </ImageBackground>
    </View>
    );
    }
    const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
});     