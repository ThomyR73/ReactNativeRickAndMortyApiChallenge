import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import Card from '../Card/Card'
import { View, FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import styles from './EpisodesStyles'

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

interface Filter {
    name: string
}

const Episodes: React.FunctionComponent = () => {
    const initialFilter: Filter = {
        name: ""
    };

    const [filter, setFilter] = useState<Filter>({ ...initialFilter })

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
            <Loading />
        )

        if (error && !data) return (
            <Error error={error} />
        )

        return (
            <FlatList
                data={data.episodes.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Card name={item.name} episode={item.episode} cardType="Episode" pressable={true} date={item.air_date} characters={item.characters} key={`#${item.id}`} />}
                onEndReachedThreshold={0.5}

                onEndReached={data.episodes.info.next && (({ distanceFromEnd }) => {
                    fetchMore({
                        variables: { page: data.episodes.info.next },
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
                })
                }
            />
        )

    }

    return (
        <View style={styles.container}>
            <Search setFilter={setFilter} search="episodes" />
            <View style={styles.cardsContainer}>

                {renderContent()}

            </View>
            <Nav />
        </View>
    )
}

export default Episodes