import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class ProdukList extends Component {
  renderProduk() {
    return this.props.data.produks.map(produk => {
      return (
        <li key={produk.id} className="collection-item">
          {produk.title}
        </li>
      );
    });
  }

  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return <ul className="collection">{this.renderProduk()}</ul>;
  }
}

const query = gql`
  {
    produks {
      id
      title
    }
  }
`;

export default graphql(query)(ProdukList); //format redux
