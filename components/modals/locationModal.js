import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CharsCard from '../cards/charsCard'

export default function CharsModal({ route, navigation }) {
    const { name, dimension, type, characters } = route.params

    const checkChars = () => {
        const { name } = characters[0]
        if (!name) {
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <View style={styles.dataContainer}>

                <View style={styles.dataLabel}>
                    <Text style={styles.dataClass}>
                        Type:
                            </Text>
                    <Text style={styles.dataText}>
                        {type}
                    </Text>
                </View>


                <View style={styles.dataLabel}>
                    <Text style={styles.dataClass}>
                        Dimension:
                    </Text>
                    <Text style={styles.dataText}>
                        {dimension}
                    </Text>
                </View>

                {checkChars() ? (

                    <View style={styles.scroll}>
                        <FlatList
                            data={characters.slice(0, 5)}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <CharsCard name={item.name} img={item.image} navigation={navigation} type={item.type} gender={item.gender} species={item.species} key={`#${item.id}`} />}
                        />
                    </View>

                ) :
                    <Text style={styles.error}>
                        There's no residents found for this location
                    </Text>

                }


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        marginTop: 15
    },
    name: {
        fontSize: 30,
        marginTop: 0,
        width: "80%",
        textAlign: "center",
        marginBottom: 15

    },
    dataContainer: {
        width: "80%",
        alignItems: "flex-start"
    },
    dataLabel: {
        flexDirection: "row"
    },
    dataClass: {
        fontWeight: "bold",
        marginRight: 5,
        marginBottom: 5,
        fontSize: 18
    },
    dataText: {
        fontSize: 18
    },
    scroll: {
        height: "80%",
        marginTop: 15
    },
    error: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        marginTop: 15

    }

})