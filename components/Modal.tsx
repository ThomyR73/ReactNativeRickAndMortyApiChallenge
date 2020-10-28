import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Dimensions } from 'react-native'
import Card from './Card'

interface Characters {
    name: string;
    image: string;
    id: string
}

type RootStackParamList = {
    Modal: {
      name: string;
      img?: string,
      type?: string,
      gender?: string,
      species?: string,
      dimension?: string,
      characters?: Array<Characters>,
      episode?: string,
      date?: string,
      modalType: string
    }
  };

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Modal'>;

type Props = {
    route: ProfileScreenRouteProp;
};


const Modal: React.FunctionComponent<Props> = ({ route }) => {
    const { name, img, type, gender, species, dimension, characters, episode, date, modalType } = route.params

    const CheckChars: React.FunctionComponent = () => {
        if (!characters) return(null)
        const { name } = characters[0]
        return (!!name ? (
            <View style={NormalStyle.scroll}>
                <Text style={NormalStyle.dataClass}>Characters</Text>
                {characters.slice(0, 5).map((char) => { return <Card name={char.name} img={char.image} pressable={false} cardType="Character" key={`#${char.id}`} /> })}
            </View>
        ) : (
                <Text style={NormalStyle.error}>
                    There are no {modalType === "Episode" ? "characters" : "residents"} found for this {modalType === "Episode" ? "episode" : "location"}
                </Text>
            ))

    }

    return (
        <ScrollView style={modalType === "Character" ? CharStyle.container : NormalStyle.container}>

            { !!img && (
                <Image source={{ uri: img }} style={CharStyle.img} />
            )}

            <Text style={modalType === "Character" ? CharStyle.name : NormalStyle.name}>
                {name}
            </Text>

            <View style={NormalStyle.dataContainer}>

                {!!type && (
                    <View style={NormalStyle.dataLabel}>
                        <Text style={NormalStyle.dataClass}>
                            Type:
                        </Text>
                        <Text style={NormalStyle.dataText}>
                            {type}
                        </Text>
                    </View>
                )}

                {!!gender && (
                    <View style={NormalStyle.dataLabel}>
                        <Text style={NormalStyle.dataClass}>
                            Gender:
                        </Text>
                        <Text style={NormalStyle.dataText}>
                            {gender}
                        </Text>
                    </View>
                )}

                {!!species && (
                    <View style={NormalStyle.dataLabel}>
                        <Text style={NormalStyle.dataClass}>
                            Species:
                        </Text>
                        <Text style={NormalStyle.dataText}>
                            {species}
                        </Text>
                    </View>
                )}

                {!!date && (
                    <View style={NormalStyle.dataLabel}>
                        <Text style={NormalStyle.dataClass}>
                            Relese Date:
                        </Text>
                        <Text style={NormalStyle.dataText}>
                            {date}
                        </Text>
                    </View>
                )}

                {!!episode && (
                    <View style={NormalStyle.dataLabel}>
                        <Text style={NormalStyle.dataClass}>
                            Episode:
                        </Text>
                        <Text style={NormalStyle.dataText}>
                            {episode}
                        </Text>
                    </View>
                )}

                {!!dimension && (
                    <View style={NormalStyle.dataLabel}>
                        <Text style={NormalStyle.dataClass}>
                            Dimension:
                        </Text>
                        <Text style={NormalStyle.dataText}>
                            {dimension}
                        </Text>
                    </View>
                )}

                <CheckChars />

            </View>

        </ScrollView>
    );
}

const deviceWidth = Dimensions.get("window").width

const CharStyle = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingTop: 30,
        backgroundColor: "#f8f9fa"
    },
    img: {
        position: "relative",
        width: (deviceWidth * 0.80),
        height: (deviceWidth * 0.80),
        borderRadius: 5,
        alignSelf: "center"
    },
    name: {
        fontSize: 30,
        marginTop: 5,
        width: "80%",
        textAlign: "center",
        alignSelf: "center"
    }
})

const NormalStyle = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingTop: 15,
        backgroundColor: "#f8f9fa"
    },
    name: {
        fontSize: 30,
        marginTop: 0,
        width: "80%",
        textAlign: "center",
        marginBottom: 15,
        alignSelf: "center"

    },
    dataContainer: {
        width: "80%",
        alignItems: "flex-start",
        alignSelf: "center"
    },
    dataLabel: {
        flexDirection: "row",
        width: "80%",
        flexWrap: "wrap"
    },
    dataClass: {
        fontWeight: "bold",
        marginRight: 5,
        marginBottom: 5,
        fontSize: 18
    },
    dataText: {
        fontSize: 18
    },
    scroll: {
        height: "80%",
        marginTop: 15
    },
    error: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        marginTop: 15

    }

})


export default Modal;