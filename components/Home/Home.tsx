import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import styles from './HomeStyles'

type RootStackParamList = {
    Home: undefined;
    Characters: undefined;
    CardsList: {
        CardsType: string,
    };
};

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FunctionComponent<Props> = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.heading}>
            <Text style={styles.title}>React Native Rick and Morty Challenge</Text>
            <Text style={styles.name}>Juan Thomas Romano</Text>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Characters")}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
            <Text style={styles.date}>02/10/20</Text>
        </View>
    </View>
)

export default Home