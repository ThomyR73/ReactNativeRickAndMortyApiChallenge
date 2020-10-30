import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import styles from './LoadingStyles'

const Loading: React.FunctionComponent = () => (
    <View style={styles.view}>
        <ActivityIndicator size="large" color="#007bff" />
    </View>
)

export default Loading