import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarComp from './components/NavBarComp'
import MoviesScreen from './screens/MoviesScreen';
import SeriesScreen from './screens/SeriesScreen';
import PersonsScreen from './screens/PersonsScreen';
import HomeScreen from './screens/HomeScreen';
// import HomeDetails from './screens/HomeDetails';
import MovieDetail from './screens/MovieDetail';
import SeriesDetail from './screens/SeriesDetail';
import PersonDetail from './screens/PersonDetail';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useState } from 'react';
import Favourites from './screens/Favourites';


function App() {

  const [ isLogged, setIsLogged ] = useState(true)

  return (
    <Router>
      <NavBarComp isLogged={isLogged}/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/home' element={<HomeScreen/>} />
        <Route path='/movies' element={<MoviesScreen/>} />
        <Route path='/movies/:id' element={<MovieDetail/>} />
        <Route path='/series' element={<SeriesScreen/>} />
        <Route path='/series/:id' element={<SeriesDetail/>} />
        <Route path='/persons' element={<PersonsScreen/>} />
        <Route path='/persons/:id' element={<PersonDetail/>} />
        <Route path='/favourites' element={<Favourites/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signUp' element={<SignUp/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
