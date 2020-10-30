import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    charContainer: {
        borderColor: "rgba(0,0,0,0.125)",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "row",
        width: "100%",
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
    charTitle: {
        fontSize: 18,
        width: "60%"

    },
    container: {
        borderColor: "rgba(0,0,0,0.125)",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "column",
        width: "100%",
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

export default styles