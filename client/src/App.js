import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from "./components/Navigation";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home";
import Results from "./pages/Results";
import Creation from "./pages/Creation";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
<<<<<<< HEAD
import Collection from "./pages/Collection";
=======
import { StoreProvider } from './utils/GlobalState';
>>>>>>> 087fb4f41d43c78237bbe23004e62b9cc2dbcff8
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
import AddCredits from './components/AddCredits/AddCredits';
import Creations from './components/Creations';

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
<<<<<<< HEAD
          <ResponsiveAppBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} />
              <Route path="/creation" element={<Creation />} />
              <Route path="/sign-in" element={<Signin />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/collection" element={<Collection />} />
            </Routes>
          </div>
          <Footer />
=======
          <StoreProvider>
            <ResponsiveAppBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results" element={<Results />} />
                <Route path="/creation" element={<Creation />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/add-credits" element={<AddCredits />} />
              </Routes>
            </div>
            <Footer />
          </StoreProvider>
>>>>>>> 087fb4f41d43c78237bbe23004e62b9cc2dbcff8
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
