import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'

export default function CharsCard({ name, img, navigation, type, gender, species }) {
    return (
        <TouchableOpacity onPress={()=> navigation.navigate("CharsModal", { name, img, type, gender, species })}>

            <View style={Styles.container}>
                <Image source={{ uri: img }} style={Styles.img} />
                <Text style={Styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container: {
        borderColor: "rgba(0,0,0,0.125)",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        padding: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    img: {
        position: "relative",
        height: 100,
        width: 100,
        borderRadius: 5,
        marginRight: 15
    },
    text: {
        fontSize: 18,
        width: "60%"
        
    }
})