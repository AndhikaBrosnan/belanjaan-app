import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import ProdukList from "./components/ProdukList";
import App from "./components/App";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={ProdukList} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
