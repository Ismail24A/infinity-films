import React from 'react';
import { connect } from 'react-redux';
import { setMovies } from '../../redux/actions';
import MovieCard from '../movie-card/movie-card';
import './movies-preview.scss';

const MoviesPreview = ({movies}) => (
        <div className='preview-page'>    
            <h1 className='section'>Movies</h1>
            <div className="movies-preview">
            { movies.map(movie => movie.poster_path ? 
            <MovieCard movie={movie} key={movie.id}/> 
            : null) }
            </div>
        </div>
);
const mapStateToProps = ({movies}) => ({movies});

const mapDispatchToProps = dispatch => ({
    setMovies: movies => dispatch(setMovies(movies))
});
export default connect(mapStateToProps, mapDispatchToProps)(MoviesPreview);