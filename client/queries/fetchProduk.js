import gql from "graphql-tag";

export default gql`
  query ProdukQuery($id: ID!) {
    produk(id: $id) {
      id
      title
      komentars {
        id
        content
      }
    }
  }
`;
