import React, { Component } from "react";

class KomentarList extends Component {
  onLike(id) {
    console.log(id);
  }
  renderKomentar() {
    return this.props.komentars.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i className="material-icons" onClick={() => this.onLike(id)}>
            thumb_up
          </i>
        </li>
      );
    });
  }
  render() {
    return <ul className="collection">{this.renderKomentar()}</ul>;
  }
}

export default KomentarList;
