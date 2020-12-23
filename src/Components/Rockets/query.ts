import gql from 'graphql-tag'

export const ROCKET_INFO = gql `
query Rockets{
    rockets {
      active
      id
      flickr_images
      rocket_name
    }
  }
`;