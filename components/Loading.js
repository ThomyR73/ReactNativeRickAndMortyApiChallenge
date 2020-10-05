import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

export default function Loading() {
    return (
        <View style={styles.view}>
            <ActivityIndicator size="large" color="#007bff"/>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: "100%",
        width: "100%",
        marginTop: 10
    }
})