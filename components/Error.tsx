import { ApolloError } from '@apollo/client'
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
 
interface Props {
    error: ApolloError
  }

const Error: React.FunctionComponent<Props> = ({error}) => {

    const errorMessage = (): string => {
        switch (error.message) {
          case "Response not successful: Received status code 400":
            return "Error 400: An error occurred with the request"
          case "Network request failed":
             return "Error: An error occurred with the network"
          case "404: Not Found":
            return "Error 404: Couldn't find any results for your search"
          default:
            return error.message
        }
      }
      
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>{`${errorMessage()}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignSelf: "center",
        backgroundColor: "#f8d7da",
        padding: 15,
        borderRadius: 5,
        marginTop: 10
    },
    text: {
        color: "#721c24"
    }
})

export default Error