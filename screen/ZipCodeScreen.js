import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: "Hatyai", code: "90110" },
    { place: "Trang", code: "92000" },
    { place: "Chiangmai", code: "50000" },
    { place: "Khonkaen", code: "40000" },
    { place: "phuket", code: "83000" },
    { place: "Bangkok", code: "10000" },
    { place: "Yasothon", code: "35000" },
  ];

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code, place: place})}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../home.jpg')} style={styles.bg}>
        <View>
        <FlatList
            data={availableZipItems}
            keyExtractor={_keyExtractor}
            renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
        </ImageBackground>
    ); 
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingTop: 30
    },
    zipPlace: {
        flex: 1,
        fontSize: 20,
        color: "white",
        textAlign: "center",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: "black",
    },
    zipCode: {
        flex: 1,
        fontSize: 20,
        color: "white",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: "black",
        textAlign: "center"
    },
    bg: {
        width: "100%",
        height: "100%",
    },
})