import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
    charContainer: {
        width: "100%",
        height: "100%",
        paddingTop: 30,
        backgroundColor: "#f8f9fa"
    },
    img: {
        position: "relative",
        width: (deviceWidth * 0.80),
        height: (deviceWidth * 0.80),
        borderRadius: 5,
        alignSelf: "center"
    },
    charName: {
        fontSize: 30,
        marginTop: 5,
        width: "80%",
        textAlign: "center",
        alignSelf: "center"
    },
    container: {
        width: "100%",
        height: "100%",
        paddingTop: 15,
        backgroundColor: "#f8f9fa"
    },
    name: {
        fontSize: 30,
        marginTop: 0,
        width: "80%",
        textAlign: "center",
        marginBottom: 15,
        alignSelf: "center"

    },
    dataContainer: {
        width: "80%",
        alignItems: "flex-start",
        alignSelf: "center",
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
    },
    scroll: {
        height: "80%",
        marginTop: 15,
        marginBottom: 15
    },
    error: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        marginTop: 15

    }
})

export default styles