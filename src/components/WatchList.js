import react from "react";
import "../styles.css";
import MovieCard from "./MoviesCard";


export default function WatchList({Movies,WatchList,toggleWatchList}){
    return(
        <div>
            <h1>Your watchlist</h1>
            <div className="watchlist">
                {WatchList.map(id=>{
                    const movie=Movies.find(movie=> movie.id===id)
                    return <MovieCard key={id} movie={movie} toggleWatchList={toggleWatchList} isWatchlisted={true}></MovieCard>
                })}

            </div>
        </div>
        
    );
};