import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import Card from '../Card/Card'
import { View, FlatList } from 'react-native';
import { useQuery } from '@apollo/client'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import styles from './CardsListStyles'
import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS } from '../../config/queries'
import { RouteProp } from '@react-navigation/native';

interface filter {
    name: string
}

type RootStackParamList = {
    CardsList: {
        CardsType: string
    }
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'CardsList'>;

type Props = {
    route: ProfileScreenRouteProp;
};

const CardsList: React.FunctionComponent<Props> = ({ route }) => {
    const cardsType = route.name.toString()

    const QUERIE: any = () => {
        switch (cardsType) {
            case ("Characters"):
                return GET_CHARACTERS
            case ("Locations"):
                return GET_LOCATIONS
            case ("Episodes"):
                return GET_EPISODES
            default:
                return undefined
        }
    }

    const initialFilter: filter = {
        name: ""
    };

    const [filter, setFilter] = useState<filter>({ ...initialFilter })

    const { data, loading, error, fetchMore } = useQuery(QUERIE(),
        {
            variables: {
                page: 1,
                filter
            },
        }
    )
    const renderContent = () => {


        if (loading) return (
            <Loading />
        )

        if (error && !data) return (
            <Error error={error} />
        )

        switch (cardsType) {
            case ("Characters"):
                return (
                    <FlatList
                        data={data.characters.results}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Card name={item.name} img={item.image}
                            cardType="Character" pressable={true} type={item.type}
                            gender={item.gender} species={item.species} key={`#${item.id}`} />}
                        onEndReachedThreshold={0.5}
                        onEndReached={data.characters.info.next && (({ distanceFromEnd }) =>
                            infiniteScroll(cardsType, fetchMore, data.characters.info.next))}
                    />
                )
            case ("Locations"):
                return (<FlatList
                    data={data.locations.results}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Card name={item.name} dimension={item.dimension}
                        type={item.type} cardType="Location" pressable={true}
                        characters={item.residents} key={`#${item.id}`} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={data.locations.info.next && (({ distanceFromEnd }) =>
                        infiniteScroll(cardsType, fetchMore, data.locations.info.next))}
                />)
            case ("Episodes"):
                return (
                    <FlatList
                        data={data.episodes.results}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Card name={item.name} episode={item.episode}
                            cardType="Episode" pressable={true} date={item.air_date}
                            characters={item.characters} key={`#${item.id}`} />}
                        onEndReachedThreshold={0.5}
                        onEndReached={data.episodes.info.next && (({ distanceFromEnd }) =>
                            infiniteScroll(cardsType, fetchMore, data.episodes.info.next))}
                    />
                )

        }

    }

    return (
        <View style={styles.container}>
            <Search setFilter={setFilter} search={cardsType.toLowerCase()} />
            <View style={styles.cardsContainer}>

                {renderContent()}

            </View>
            <Nav />
        </View>
    )
}

const infiniteScroll = (route: string, fetchMore: Function, page: number): any => {
    switch (route) {
        case ("Characters"):
            return fetchMore({
                variables: { page },
                updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
                    const newChars = fetchMoreResult.characters.results;
                    const info = fetchMoreResult.characters.info;

                    const characters = {

                        __typename: previousResult.characters.__typename,
                        info,
                        results: [...previousResult.characters.results, ...newChars],

                    }

                    return newChars.length
                        ? {
                            characters
                        }
                        : previousResult;
                }
            })
        case ("Locations"):
            return fetchMore({
                variables: { page },
                updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
                    const newLocations = fetchMoreResult.locations.results;
                    const info = fetchMoreResult.locations.info;

                    const locations = {

                        __typename: previousResult.locations.__typename,
                        info,
                        results: [...previousResult.locations.results, ...newLocations],

                    }

                    return newLocations.length
                        ? {
                            locations
                        }
                        : previousResult;
                }
            })
        case ("Episodes"):
            return fetchMore({
                variables: { page },
                updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
                    const newEpisodes = fetchMoreResult.episodes.results;
                    const info = fetchMoreResult.episodes.info;

                    const episodes = {

                        __typename: previousResult.episodes.__typename,
                        info,
                        results: [...previousResult.episodes.results, ...newEpisodes],

                    }

                    return newEpisodes.length
                        ? {
                            episodes
                        }
                        : previousResult;
                }
            })
    }
}

export default CardsList