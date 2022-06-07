import gql from "graphql-tag";

export const assignmentQuery = gql`
query assignmentQuery($slug: String){
    articles:assignments(filters: { Slug: { eq: $slug } }) {
      data{
        attributes{
          Title
          Description
          Rules
          createdAt
          Files{
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