import React, { Component } from "react";
import fetchProduk from "../queries/fetchProduk";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import KomentarCreate from "./KomentarCreate";
import KomentarList from "./KomentarList";

class ProdukDetail extends Component {
  render() {
    const { produk } = this.props.data;

    if (!produk) {
      //kalo ga ada datanya, berarti loading
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h4>{produk.title}</h4>
        <KomentarList komentars={produk.komentars} />
        <KomentarCreate produkId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchProduk, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(ProdukDetail);
