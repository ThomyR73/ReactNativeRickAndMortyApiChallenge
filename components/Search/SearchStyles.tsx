import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 10
    },
    search: {
        borderColor: "rgba(0,0,0,0.125)",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        flex: 1,
        height: 40,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingLeft: 10
    },
    buttons: {
        flexDirection: "row",
        width: "33%",
        backgroundColor: "#343a40",
        height: 40,
        borderTopRightRadius: 5,
        borderBottomEndRadius: 5
    },
    searchButton: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#343a40",
        marginRight: 0

    },
    deletoButton: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dc3545",
        marginLeft: 0,
        borderTopRightRadius: 5,
        borderBottomEndRadius: 5
    },
    text: {
        color: "#f8f9fa",
        fontSize: 13
    }
})

export default styles