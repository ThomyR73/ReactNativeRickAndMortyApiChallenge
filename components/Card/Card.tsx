import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './CardStyles'

interface Character {
    name: string;
    image: string;
    id: string
}

interface Props {
    name: string,
    img?: string,
    type?: string,
    gender?: string,
    species?: string,
    dimension?: string,
    characters?: Array<Character>,
    episode?: string,
    date?: string,
    pressable: Boolean,
    cardType: string
}

const Card: React.FunctionComponent<Props> = ({ name, img, type, gender, species, dimension, characters, episode, date, pressable, cardType }) => {
    const navigation = useNavigation()
    const onPressAction: Function = () => {
        if (pressable) {
            switch (cardType) {
                case "Character":
                    return (navigation.navigate("Modal", { name, img, type, gender, species, modalType: "Character" }))
                case "Episode":
                    return (navigation.navigate("Modal", { name, episode, date, characters, modalType: "Episode" }))
                case "Location":
                    return (navigation.navigate("Modal", { name, dimension, type, characters, modalType: "Location" }))
            }
        }
        return undefined
    }
    return (
        <TouchableOpacity onPress={()=>onPressAction()} >
            <View style={cardType == "Character" ? styles.charContainer : styles.container}>
                {
                    img && (
                        <Image source={{ uri: img }} style={styles.img} />
                    )
                }
                <Text style={cardType == "Character" ? styles.charTitle : styles.title}>{name}</Text>
                {
                    episode && (
                        <Text style={styles.text}>{episode}</Text>
                    )
                }
                {
                    dimension && (
                        <Text style={styles.text}>{dimension}</Text>
                    )
                }

            </View>
        </TouchableOpacity>
    )
}


export default Card