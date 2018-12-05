import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";

import ProdukList from "./components/ProdukList";
import App from "./components/App";
import ProdukCreate from "./components/ProdukCreate";
import ProdukDetail from "./components/ProdukDetail";

const client = new ApolloClient({
  dataIdFromObject: object => object.id //o itu object
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={ProdukList} />
          <Route path="produk/new" component={ProdukCreate} />
          <Route path="produk/:id" component={ProdukDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
