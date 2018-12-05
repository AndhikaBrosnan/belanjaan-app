import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchProduks";

class ProdukCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }

  onSubmit(event) {
    event.preventDefault();
    //action waktu form di submit
    this.props
      .mutate({
        variables: {
          //state ga bisa dipanggil langsung di mutation, gara2 mutation diluar component
          title: this.state.title //mengambil value dari dalam component
        },
        refetchQueries: [{ query }] //di javascript harus masukin lagi querynya, kalo engga, pas di submit ga ke load di list
      })
      .then(() => hashHistory.push("/")); //kalo udah submit kembali ke awal
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Masukan Nama Barang</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Nama Produk: </label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddProduk($title: String) {
    addProduk(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(ProdukCreate);
