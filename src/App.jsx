// Main App component
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import Marketplace from './containers/Marketplace/Marketplace';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import useWeb3 from './hooks/useWeb3';

import './styles/globals.css';
import './styles/theme.css'; // Assuming you want the theme applied globally

const App = () => {
  const { connectWallet, account } = useWeb3();

  return (
    <Router>
      <div className="App">
        <Header connectWallet={connectWallet} account={account} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/marketplace" component={Marketplace} />
          {/* Add more routes as needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
