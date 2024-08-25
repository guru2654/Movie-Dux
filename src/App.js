import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MovieGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import react, { useState, useEffect } from "react";

function App() {

  const [Movies, setMovies] = useState([]);

  const [Watchlist , setWatchList] = useState([])

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchList = (movieID) => {
    setWatchList(prev => 
      prev.includes(movieID) ?  prev.filter( id => id!=movieID) : [...prev,movieID]

    )
  }


  return (
    <div className="App">
      <div className='container'>
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="watchlist">WatchList</Link>
              </li>
            </ul>

          </nav>

          <Routes>
            <Route path="/" element={<MovieGrid Movies={Movies} WatchList={Watchlist} toggleWatchList={toggleWatchList} />}></Route>
            <Route path="/watchlist" element={<WatchList Movies={Movies} WatchList={Watchlist} toggleWatchList={toggleWatchList} />}></Route>
            
          </Routes>

        </Router>


        

      </div>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
