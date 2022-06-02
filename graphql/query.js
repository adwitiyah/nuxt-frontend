import gql from 'graphql-tag'

export const messageQuery =gql`
query {
    messages:courses {
     data{
      attributes{
        Title
        Description
        Slug
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}  
`