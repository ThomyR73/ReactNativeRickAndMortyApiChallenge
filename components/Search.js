import React, { useState } from 'react'
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

export default function Search({ setFilter, search }) {
    const [name, setName] = useState('');

    const onSubmit = () => {
        setFilter({
            name
        })
    }

    const onClear = () => {
        setName("")
        setFilter({
            name: ""
        })
    }

    const startSearch =  (text) => {
        if (text.length >= 3) {
            setName(text)
            onSubmit()
        }
        if (text.length == 0) {
            onClear()
            
        }
        else {
            setName(text)
        }
    }


    return (
        <View style={styles.container}>
            <TextInput placeholder={`Search ${search}`} style={styles.search} onChangeText={text => startSearch(text)} value={name} />
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.searchButton} onPress={onSubmit}>
                    <Text style={styles.text} >Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deletoButton} onPress={onClear}>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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