import gql from "graphql-tag";

export const articleQuery = gql`
query articleQuery($slug: String){
    articles:courses(filters: { Slug: { eq: $slug } }) {
      data{
        attributes{
          Title
          Description
          image{
            data{
              attributes{
                url
              }
            }
          }
          assignments{
            data{
              id
              attributes{
                Title
                Description
                Rules
                Slug
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
      }
  }
}
`