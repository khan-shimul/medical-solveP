import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import ShopDone from './components/ShopDone/ShopDone';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="font-link">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/product/:id">
              <ProductDetail />
            </Route>
            <Route path="/shopdone">
              <ShopDone />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
