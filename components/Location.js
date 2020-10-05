import React, { useState } from 'react'
import Nav from './Nav'
import Search from './Search'
import LocationsCard from './cards/locationsCard'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client'
import Loading from './Loading'
import Error from './Error'

const GET_LOCATION = gql`
query locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      results {
        name
        dimension
        type
        id
        residents {
          name
          image
          type
          gender
          species
          id
        }
      }
      info {
        count
        next
        prev
        pages
      }
    }
  }
  
`

export default function Location({ navigation }) {
    const initialFilter = {
        name: ""
    };

    const [filter, setFilter] = useState({ ...initialFilter })

    const { data, loading, error, fetchMore } = useQuery(GET_LOCATION,
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
                data={data.locations.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <LocationsCard name={item.name} dimension={item.dimension} type={item.type} navigation={navigation} characters={item.residents} key={`#${item.id}`} />}
                onEndReachedThreshold={0.5}

                onEndReached={data.locations.info.next ?

                    ({ distanceFromEnd }) => {
                        fetchMore({
                            variables: { page: data.locations.info.next },
                            updateQuery: (previousResult, { fetchMoreResult }) => {
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


                    } : null

                }

            />
        )

    }

    return (
        <View style={styles.container}>
            <Search setFilter={setFilter} search="locations"/>
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