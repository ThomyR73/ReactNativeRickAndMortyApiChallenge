import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function CharsModal({ route, navigation }) {
    const { name, img, type, gender, species } = route.params
    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.img} />
            <Text style={styles.name}>
                {name}
            </Text>
            <View style={styles.dataContainer}>
                {type ?
                    (
                        <View style={styles.dataLabel}>
                            <Text style={styles.dataClass}>
                                Type:
                            </Text>
                            <Text style={styles.dataText}>
                                {type}
                            </Text>
                        </View>
                    )
                    : null
                }


                <View style={styles.dataLabel}>
                    <Text style={styles.dataClass}>
                        Gender:
                    </Text>
                    <Text style={styles.dataText}>
                        {gender}
                    </Text>
                </View>

                <View style={styles.dataLabel}>
                    <Text style={styles.dataClass}>
                        Species:
                    </Text>
                    <Text style={styles.dataText}>
                        {species}
                    </Text>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingTop: 30,
        backgroundColor: "#f8f9fa"
    },
    img: {
        position: "relative",
        width: "80%",
        height: "40%",
        borderRadius: 5
    },
    name: {
        fontSize: 30,
        marginTop: 5,
        width: "80%",
        textAlign: "center"

    },
    dataContainer: {
        width: "80%",
        alignItems: "flex-start",
    },
    dataLabel: {
        flexDirection: "row",
        width: "80%",
        flexWrap: "wrap"
    },
    dataClass: {
        fontWeight: "bold",
        marginRight: 5,
        marginBottom: 5,
        fontSize: 18
    },
    dataText: {
        fontSize: 18
    }
})