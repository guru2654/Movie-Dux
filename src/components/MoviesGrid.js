import react, { useState } from "react";
import "../styles.css";
import MovieCard from "./MoviesCard";

export default function MovieGrid({Movies,WatchList,toggleWatchList}) {
  

  const [searchTerm, setsearchTerm] = useState("");

  const[Genre , setGenre]=useState("All Genre")
  const [Rating, setRating]=useState("All")

  

  const HandleSearchChange = (e)=>{
    setsearchTerm(e.target.value)
  }

  const HandleGenreChange = (e)=>{
    setGenre(e.target.value)
  }

  const HandleRatingChange = (e)=>{
    setRating(e.target.value)
  }

  const matchGenre = (movie,Genre)=>{
    return (
        Genre==="All Genre" || movie.genre.toLowerCase()===Genre.toLowerCase()
    );
  }

  const matchesRating= (movie,Rating)=>{
    switch(Rating){
        case "All":
            return true;
        case "Good":
            return movie.rating>=8;
        case "ok":
            return movie.rating>=5 && movie.rating<8;
        case "Bad":
            return movie.rating<5;
        default:
            return false;
    }
  }

  const searchterm = (movie,searchTerm) =>{
    return(
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  };

  const filterMovies = Movies.filter(movie=>

    matchGenre(movie,Genre) 
    && 
    matchesRating(movie,Rating) &&
    searchterm(movie,searchTerm)
    

  );

  return (
    <div>
        <input
        className="search-input"
        type="text"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={HandleSearchChange}
        />

        <div className="filter-bar">
            <div className="filter-slot">
                <label>Genre</label>
                <select className="filter-dropdown" value={Genre} onChange={HandleGenreChange}>
                    <option>All Genre</option>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Fantasy</option>
                    <option>Horror</option>
                </select>

            </div>
            <div className="filter-slot">
                <label>Rating</label>
                <select className="filter-dropdown" value={Rating} onChange={HandleRatingChange}>
                    <option>All</option>
                    <option>Good</option>
                    <option>ok</option>
                    <option>Bad</option>
                </select>

            </div>
        </div>


        <div className="movies-grid">
        {filterMovies.length > 0 ? (
          filterMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}
            toggleWatchList={toggleWatchList}
            isWatchlisted={WatchList.includes(movie.id)} />
          ))
        ) : (
          <div className="no-results">No movies found matching your criteria.</div>
        )}
      </div>
    </div>
  );
}
