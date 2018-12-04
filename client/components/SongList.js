import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  //   state = {}; kalo pake state error, KENAPA?!

  renderProduk() {
    return this.props.data.produks.map(produk => {
      return <li>{produk.title}</li>;
    });
  }

  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return <div>{this.renderProduk()}</div>;
  }
}

const query = gql`
  {
    produks {
      title
    }
  }
`;

export default graphql(query)(SongList); //format redux
