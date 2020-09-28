import React from 'react';
import {ReactComponent as Star} from '../../assets/star.svg';
import './movie-card.scss';

const MovieCard = ({movie}) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

    return ( 
    <div className='movie-card'>
        <Star className='icon' />
        <i className='rating'>{movie.vote_average}</i>
        <img className='poster' alt='' src={IMG_URL +  movie.poster_path} />
        <p className='movie-title'>{movie.title}</p>
        <span className='year'>{movie.release_date.slice(0, 4)}</span>
        <div className='movie-overview'>
            <h3 className='over-title'>Overview: </h3>
            <p className='over-para'>{movie.overview}</p>
        </div>
    </div>
     );
}
 
export default MovieCard;