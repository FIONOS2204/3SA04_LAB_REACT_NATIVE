import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateTime = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? ' PM' : ' AM'

            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 

            setDate(days[day] + ', ' + date+ ' ' + months[month]) 

        }, 1000);
    }, [])
    return (
        <View>
            <Text></Text>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    time: {
        fontSize: 45,
        color: 'white',
        fontWeight: '300'
    },

    date: {
        fontSize: 25,
        color: 'white',
        fontWeight: '300'
    },
})

export default DateTime