import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Shared/Navbar/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { createContext, useState } from 'react';
import Profile from './components/Profile/Profile';
import UploadPhoto from './components/UploadPhoto/UploadPhoto';
import CreateAlbum from './components/CreateAlbum/CreateAlbum';
import PrivateRoute from './components/Auth/PrivateRoute';
import ImageCard from './components/Profile/ImageAlbum';

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/profile">
            <Profile></Profile>
          </PrivateRoute>
          <Route path="/album/:name">
            <ImageCard></ImageCard>
          </Route>
          <PrivateRoute path="/createAlbum">
            <CreateAlbum></CreateAlbum>
          </PrivateRoute>
          <PrivateRoute path="/uploadPhoto">
            <UploadPhoto></UploadPhoto>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
