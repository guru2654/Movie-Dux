import react from 'react';
import '../styles.css';


export default function Header() {

    return (
        <div className='header'>
            <img className='logo' src='logo.png' alt='movieDux'/>
            <h2 className='app-subtitle'> it's time for popcorn ! Find your next Movie on MovieDux </h2>

        </div>
    )
}