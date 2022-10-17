import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";

const cache = new InMemoryCache({
  typePolicies:{
    Query: {
      fields: {
        clients:{
          merge(existing, incoming){
            return incoming
          }
        },
        projects:{
          merge(existing, incoming){
            return incoming
          }
        },
      }
    }
  }
})

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
<BrowserRouter>
    <App />
  </BrowserRouter>,
  </ApolloProvider>
);
