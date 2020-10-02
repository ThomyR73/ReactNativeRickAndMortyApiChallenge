import React, { useState } from 'react'
import Nav from './Nav'
import Search from './Search'
import CharsCard from './cards/charsCard'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client'

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

export default function Chars({ navigation }) {

    const initialFilter = {
        name: ""
    };

    const [filter, setFilter] = useState({ ...initialFilter })

    const { data, loading, error, fetchMore } = useQuery(GET_CHARS,
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
                data={data.characters.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CharsCard name={item.name} img={item.image} navigation={navigation} type={item.type} gender={item.gender} species={item.species} key={`#${item.id}`} />}
                onEndReachedThreshold={0.5}

                onEndReached={data.characters.info.next ?

                    ({ distanceFromEnd }) => {
                        fetchMore({
                            variables: { page: data.characters.info.next },
                            updateQuery: (previousResult, { fetchMoreResult }) => {
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


                    } : null

                }

            />
        )

    }

    return (
        <View style={styles.container}>
            <Search setFilter={setFilter}  search="characters"/>
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