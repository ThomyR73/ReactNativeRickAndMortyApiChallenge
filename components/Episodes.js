import React, { useState } from 'react'
import Nav from './Nav'
import Search from './Search'
import EpisodesCard from './cards/episodesCard'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client'

const GET_EPISODES = gql`
query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        name
        episode
        air_date
        id
        characters {
          name
          image
          type
          gender
          species
          id
        }
      }
      info {
        pages
        next
        prev
        count
      }
    }
  }
`

export default function Episodes({ navigation }) {
    const initialFilter = {
        name: ""
    };

    const [filter, setFilter] = useState({ ...initialFilter })

    const { data, loading, error, fetchMore } = useQuery(GET_EPISODES,
        {
            variables: {
                page: 1,
                filter
            },
        }
    )
    const renderContent = () => {


        if (loading && !data) return (
            <Text>Loading...</Text>
        )

        if (error && !data) return (
            <Text>{error.message}</Text>
        )

        return (
            <FlatList
                data={data.episodes.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <EpisodesCard name={item.name} episode={item.episode} navigation={navigation} date={item.air_date} characters={item.characters} key={`#${item.id}`} />}
                onEndReachedThreshold={0.5}

                onEndReached={data.episodes.info.next ?

                    ({ distanceFromEnd }) => {
                        fetchMore({
                            variables: { page: data.episodes.info.next },
                            updateQuery: (previousResult, { fetchMoreResult }) => {
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


                    } : null

                }

            />
        )

    }

    return (
        <View style={styles.container}>
            <Search setFilter={setFilter} search="episodes"/>
            <View style={styles.cardsContainer}>

                {renderContent()}

            </View>
            <Nav navigation={navigation}></Nav>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: "100%"
    },
    cardsContainer: {
        backgroundColor: '#f8f9fa',
        alignItems: "stretch",
        width: "100%",
        paddingHorizontal: 15,
        alignSelf: "flex-start",
        justifyContent: "flex-start",
        flex: 1
    }
})