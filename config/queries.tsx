import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
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

export const GET_EPISODES = gql`
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

export const GET_LOCATIONS = gql`
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