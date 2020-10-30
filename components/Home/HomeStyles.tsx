import { StyleSheet } from 'react-native'

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

export default styles