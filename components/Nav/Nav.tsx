import React, { FunctionComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation  } from '@react-navigation/native'
import styles from './NavStyles'

const Nav: FunctionComponent = () => {
    const navigation = useNavigation()
    const route = useRoute()
    return (
        <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.navigate("Chars")}>
                <View>
                    <Text style={route.name === "Chars" ? styles.selectedText : styles.text} >Characters</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.div}></View>

            <TouchableOpacity onPress={() => navigation.navigate("Location")}>
                <View>
                    <Text style={route.name === "Location" ? styles.selectedText : styles.text}>Locations</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.div}></View>

            <TouchableOpacity onPress={() => navigation.navigate("Episodes")}>
                <View>
                    <Text style={route.name === "Episodes" ? styles.selectedText : styles.text}>Episodes</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Nav