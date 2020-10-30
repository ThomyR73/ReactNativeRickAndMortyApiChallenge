import { StyleSheet } from 'react-native'

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

export default styles