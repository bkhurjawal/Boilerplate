import React, { useState, useEffect } from "react";
import { SafeAreaView, AsyncStorage, StatusBar } from "react-native";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import Routes from "./Router";

export const UserContext = React.createContext({
  profile: {},
  loading: true,
  token: null,
  setData: () => {},
});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default function App(props) {
  useEffect(() => {
    console.disableYellowBox = true;
  });

  const httpLink = createHttpLink({
    uri: "http:fetchingapiaddress.com",
  });

  const authLink = setContext((_, { headers }) => {
    return AsyncStorage.getItem("token").then((data) => {
      let token = data;
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : " ",
        },
      };
    });
  });

  const defaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  };

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    defaultOptions: defaultOptions,
    // link: new HttpLink({uri: 'http://13.52.145.212:8080/graphql'})
  });
  const setUserData = (data) => {
    setState({ ...state, ...data });
  };

  const initState = {
    profile: {},
    token: null,
    loading: true,
    setData: setUserData,
  };

  const [state, setState] = useState(initState);
  return (
    <UserProvider value={state}>
      <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" backgroundColor={"#FFF"} />
        <SafeAreaView style={{ flex: 0 }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <Routes />
        </SafeAreaView>
      </ApolloProvider>
    </UserProvider>
  );
}
