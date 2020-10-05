import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
 
export default function Nav({ navigation }) {
    const route = useRoute()
    return (
        <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.navigate("Chars")}>
                <View>
                    <Text style={route.name == "Chars" ? styles.selectedText : styles.text } >Characters</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.div}></View>

            <TouchableOpacity onPress={() => navigation.navigate("Location")}>
                <View>
                    <Text style={route.name == "Location" ? styles.selectedText : styles.text }>Locations</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.div}></View>
            
            <TouchableOpacity onPress={() => navigation.navigate("Episodes")}>
                <View>
                    <Text style={route.name == "Episodes" ? styles.selectedText : styles.text }>Episodes</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "#343a40",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 50,
        alignItems: "center",
        alignSelf: "flex-end"
    },
    text: {
        color: "#f8f9fa"
    },
    selectedText: {
        color: "#07bff4"
    },
    div: {
        backgroundColor: "#f8f9fa",
        height: 20,
        width: 1
    }
})