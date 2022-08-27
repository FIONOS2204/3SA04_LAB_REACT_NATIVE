import React from "react";
import { StatusBar, View } from "react-native";
import Weather from '../components/Weather'


export default function WeatherScreen({route}) { 
    return (
        <View>
            <Weather zipCode={route.params.zipCode} place={route.params.place} />
            <StatusBar style="auto" />
        </View>
    );
}