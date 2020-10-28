import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

const Loading: React.FunctionComponent = () => (
    <View style={styles.view}>
        <ActivityIndicator size="large" color="#007bff" />
    </View>
)

export default Loading

const styles = StyleSheet.create({
    view: {
        height: "100%",
        width: "100%",
        marginTop: 10
    }
})