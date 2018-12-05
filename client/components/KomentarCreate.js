import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class KomentarCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          produkId: this.props.produkId
        }
      })
      .then(() => this.setState({ content: "" })); //takes time
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Tambahkan Komentar</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddKomentarToProduk($produkId: ID, $content: String) {
    addKomentarToProduk(content: $content, produkId: $produkId) {
      id
      komentars {
        id
        content
      }
    }
  }
`;

export default graphql(mutation)(KomentarCreate);
