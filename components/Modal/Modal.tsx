import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { View, Text, Image, ScrollView } from 'react-native'
import Card from '../Card/Card'
import styles from './ModalStyles'

interface Character {
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
      characters?: Array<Character>,
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
            <View style={styles.scroll}>
                <Text style={styles.dataClass}>Characters</Text>
                {characters.slice(0, 5).map((char) => { return <Card name={char.name} img={char.image} pressable={false} cardType="Character" key={`#${char.id}`} /> })}
            </View>
        ) : (
                <Text style={styles.error}>
                    There are no {modalType === "Episode" ? "characters" : "residents"} found for this {modalType === "Episode" ? "episode" : "location"}
                </Text>
            ))

    }

    return (
        <ScrollView style={modalType === "Character" ? styles.charContainer : styles.container}>

            { !!img && (
                <Image source={{ uri: img }} style={styles.img} />
            )}

            <Text style={modalType === "Character" ? styles.charName : styles.name}>
                {name}
            </Text>

            <View style={styles.dataContainer}>

                {!!type && (
                    <View style={styles.dataLabel}>
                        <Text style={styles.dataClass}>
                            Type:
                        </Text>
                        <Text style={styles.dataText}>
                            {type}
                        </Text>
                    </View>
                )}

                {!!gender && (
                    <View style={styles.dataLabel}>
                        <Text style={styles.dataClass}>
                            Gender:
                        </Text>
                        <Text style={styles.dataText}>
                            {gender}
                        </Text>
                    </View>
                )}

                {!!species && (
                    <View style={styles.dataLabel}>
                        <Text style={styles.dataClass}>
                            Species:
                        </Text>
                        <Text style={styles.dataText}>
                            {species}
                        </Text>
                    </View>
                )}

                {!!date && (
                    <View style={styles.dataLabel}>
                        <Text style={styles.dataClass}>
                            Relese Date:
                        </Text>
                        <Text style={styles.dataText}>
                            {date}
                        </Text>
                    </View>
                )}

                {!!episode && (
                    <View style={styles.dataLabel}>
                        <Text style={styles.dataClass}>
                            Episode:
                        </Text>
                        <Text style={styles.dataText}>
                            {episode}
                        </Text>
                    </View>
                )}

                {!!dimension && (
                    <View style={styles.dataLabel}>
                        <Text style={styles.dataClass}>
                            Dimension:
                        </Text>
                        <Text style={styles.dataText}>
                            {dimension}
                        </Text>
                    </View>
                )}

                <CheckChars />

            </View>

        </ScrollView>
    );
}

export default Modal;