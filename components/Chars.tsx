import React, { useState } from 'react'
import Nav from './Nav'
import Search from './Search'
import Card from './Card'
import { StyleSheet, View, FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client'
import Loading from './Loading'
import Error from './Error'

interface filter {
    name:string
}

const GET_CHARS = gql`
query characters($page: Int, $filter: FilterCharacter){
    characters(page:$page, filter: $filter){
      results{
        name
        image
        type
        gender
        species
        id
      }
      info{
        count
        next
        prev
        pages
      }
    }
  }
`

const Chars: React.FunctionComponent = () => {

    const initialFilter: filter = {
        name: ""
    };

    const [filter, setFilter] = useState<filter>({ ...initialFilter })

    const { data, loading, error, fetchMore } = useQuery(GET_CHARS,
        {
            variables: {
                page: 1,
                filter
            },
        }
    )
    const renderContent= () => {


        if (loading) return (
            <Loading />
        )

        if (error && !data) return (
            <Error error={error} />
        )

        return (
            <FlatList
                data={data.characters.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Card name={item.name} img={item.image} cardType="Character" pressable={true} type={item.type} gender={item.gender} species={item.species} key={`#${item.id}`} />}
                onEndReachedThreshold={0.5}

                onEndReached={data.characters.info.next && (({ distanceFromEnd }) => {
                    fetchMore({
                        variables: { page: data.characters.info.next },
                        updateQuery: (previousResult:any, { fetchMoreResult }:any) => {
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
                })
                }
            />
        )

    }

    return (
        <View style={styles.container}>
            <Search setFilter={setFilter} search="characters" />
            <View style={styles.cardsContainer}>

            {renderContent()}

            </View>
            <Nav/>
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

export default Chars