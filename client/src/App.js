import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from "./components/Navigation";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home";
import Results from "./pages/Results";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import "@mui/material";
import "@emotion/react"; 
import "@emotion/styled"

function App() {

  // const [menu] = useState(['Logo', 'Products', 'Marketing', 'About']);
  // const [currentTitle, setCurrentTitle] = useState(menu[0])


  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <ResponsiveAppBar/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/results"
                element={<Results />}
              />
              <Route
                path="/sign-in"
                element={<Signin />}
              />
              <Route
                path="/sign-up"
                element={<Signup />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
