import react from "react";
import "../styles.css";

export default function MovieCard({movie,isWatchlisted,toggleWatchList}) {

    const HandleError = (e) =>{
        e.target.src= "images/default.jpg";
        
    };

    const getRatingClass = (rating)=>{
        if (rating>=8){
            return 'rating-good '
        }

        if (rating >=5 && rating<8){
            return 'rating-ok '
        }

        return 'rating-bad'

    }

  return (
    <div key={movie.id} className="movie-card">
      <img src={`images/${movie.image}`} alt={movie.title} onError={HandleError} />
      <div className="movie-card-info">
        <h3 className="move-card-tittle">{movie.title}</h3>
        <div>
        <span className="movie-card-genre">{movie.genre}</span>
        <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</span>

        </div>
        <label className="switch">
          <input type="checkbox" checked={isWatchlisted} onChange={()=>toggleWatchList(movie.id)}></input>

          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In WatchList" : "Add to Watchlist"}
            </span>
          </span>

        </label>
        
      </div>
    </div>
  );
}