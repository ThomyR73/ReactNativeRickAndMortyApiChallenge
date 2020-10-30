import { ApolloError } from '@apollo/client'
import React from 'react'
import { View, Text } from 'react-native'
import styles from './ErrorStyles'
 
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

export default Error