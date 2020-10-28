import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface Characters {
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
    characters?: Array<Characters>,
    episode?: string,
    date?: string,
    pressable: Boolean,
    cardType: string
}

const Card: React.FunctionComponent<Props> = ({ name, img, type, gender, species, dimension, characters, episode, date, pressable, cardType }) => {
    const navigation = useNavigation()
    const onPressAction: Function = () => {
        switch (cardType) {
            case "Character":
                return (navigation.navigate("Modal", { name, img, type, gender, species, modalType:"Character" }))
            case "Episode":
                return (navigation.navigate("Modal", { name, episode, date, characters, modalType:"Episode" }))
            case "Location":
                return (navigation.navigate("Modal", { name, dimension, type, characters, modalType:"Location" }))
        }
    }
    return (
        <TouchableOpacity onPress={pressable ? (() => onPressAction()) : ( () => {} )}>
            <View style={cardType == "Character" ? CharStyles.container : NormalStyle.container}>
                {
                    img && (
                        <Image source={{ uri: img }} style={CharStyles.img} />
                    )
                }
                <Text style={cardType == "Character" ? CharStyles.text : NormalStyle.title}>{name}</Text>
                {
                    episode && (
                        <Text style={NormalStyle.text}>{episode}</Text>
                    )
                }
                {
                    dimension && (
                        <Text style={NormalStyle.text}>{dimension}</Text>
                    )
                }

            </View>
        </TouchableOpacity>
    )
}

const CharStyles = StyleSheet.create({
    container: {
        borderColor: "rgba(0,0,0,0.125)",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        padding: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    img: {
        position: "relative",
        height: 100,
        width: 100,
        borderRadius: 5,
        marginRight: 15
    },
    text: {
        fontSize: 18,
        width: "60%"
        
    }
})

const NormalStyle = StyleSheet.create({
    container: {
        borderColor: "rgba(0,0,0,0.125)",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
        padding: 10,
        alignItems: "flex-start",
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    text: {
        fontSize: 16,
    }
})

export default Card