import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
 
export default function Error({error}) {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>{`Error: ${error.message}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignSelf: "center",
        backgroundColor: "#f8d7da",
        padding: 15,
        borderRadius: 5,
        marginTop: 10
    },
    text: {
        color: "#721c24"
    }
})