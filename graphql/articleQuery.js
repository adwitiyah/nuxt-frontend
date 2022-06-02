import gql from "graphql-tag";

export const articleQuery = gql`
query articleQuery($slug: String){
    articles:courses(filters: { Slug: { eq: $slug } }) {
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