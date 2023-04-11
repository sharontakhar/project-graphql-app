import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Clients from "./components/Clients";

//inMemoryCache enables Apollo to respond immediately to
//queries already cached data w/o network req
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`,
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Clients />
        <div className="container">hello</div>
      </ApolloProvider>
    </>
  );
}

export default App;
