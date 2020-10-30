import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import Card from '../Card/Card'
import { View, FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import styles from './LocationStyles'

interface filter {
    name:string
}

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

const Location:React.FunctionComponent = () => {
    const initialFilter:filter = {
        name: ""
    };

    const [filter, setFilter] = useState<filter>({ ...initialFilter })

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
                renderItem={({ item }) => <Card name={item.name} dimension={item.dimension} type={item.type} cardType="Location" pressable={true} characters={item.residents} key={`#${item.id}`} />}
                onEndReachedThreshold={0.5}

                onEndReached={data.locations.info.next && (({ distanceFromEnd }) => {
                    fetchMore({
                        variables: { page: data.locations.info.next },
                        updateQuery: (previousResult: any, { fetchMoreResult }:any) => {
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
                })
                }
            />
        )

    }

    return (
        <View style={styles.container}>
            <Search setFilter={setFilter} search="locations" />
            <View style={styles.cardsContainer}>

                {renderContent()}

            </View>
            <Nav/>
        </View>
    )
}

export default Location