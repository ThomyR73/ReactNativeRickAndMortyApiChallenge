import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function EpisodesCard({ name, episode, date , characters, navigation }) {
    return (
        <TouchableOpacity onPress={()=> navigation.navigate("EpisodeModal", { name, episode, date, characters }) }>
            <View style={Styles.container}>
                <Text style={Styles.title}>{name}</Text>
                <Text style={Styles.text}>{episode}</Text>
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
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
        padding: 10,
        alignItems: "flex-start",
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    text: {
        fontSize: 16,
    }
})