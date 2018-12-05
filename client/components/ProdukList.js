import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchProduks";

class ProdukList extends Component {
  onProdukDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch()); //di ES6 kalo key sama value sama, tulis sekali aja
  }

  renderProduk() {
    return this.props.data.produks.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/produk/${id}`}>{title}</Link>
          <i className="material-icons" onClick={() => this.onProdukDelete(id)}>
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Aplikasi Penjualan Barang</h3>
        <ul className="collection">{this.renderProduk()}</ul>
        <Link to="/produk/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

//query mutation delete
const mutation = gql`
  mutation DeleteProduk($id: ID) {
    deleteProduk(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(ProdukList));
//buat helper dengan graphql dan mutation
//lalu invoke hasilnya ke helper yang lain
//ini kayak format redux
