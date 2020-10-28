import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Chars: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FunctionComponent<Props> = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.heading}>
            <Text style={styles.title}>React Native Rick and Morty Challenge</Text>
            <Text style={styles.name}>Juan Thomas Romano</Text>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Chars")}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
            <Text style={styles.date}>02/10/20</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#f8f9fa"
    },
    heading: {
        marginTop: 100,
        alignItems: "center",
        fontFamily: "SFUIDisplay"
    },
    title: {
        color: "#343a40",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    name: {
        color: "#343a40",
        fontSize: 15
    },
    footer: {
        alignItems: "center",
        width: "100%",
        marginBottom: 20
    },
    button: {
        width: "60%",
        backgroundColor: "#343a40",
        borderRadius: 5,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    buttonText: {
        color: "#f8f9fa",
        fontSize: 17
    },
    date: {
        color: "#343a40",
        fontWeight: "bold"
    }

})

export default Home