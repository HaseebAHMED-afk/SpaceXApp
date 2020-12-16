import gql from 'graphql-tag'

export const QUERY_LAUNCH = gql `
query Launches{
    launches {
      mission_name
      launch_success
      launch_year
    }
  }
`;