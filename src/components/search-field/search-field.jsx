import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Search} from '../../assets/search.svg';
import { setMovies } from '../../redux/actions';
import './search-field.scss';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '04c35731a5ee918f014970082a0088b1';

class SearchField extends React.Component{

    state = {
        input: ''
    }

    setSearchedMovies = (title) => {
        fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${title}`)
        .then(data => data.json())
        .then(({results}) => {
        this.props.setMovies(results);

        });
    }
    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

render(){
        const { input } = this.state;
    return ( 
        <div className='search-field'>
            <input
                onInput={this.onInputChange}
                type='text'
                placeholder='search' 
                className='search'/>
            <button type='submit'
            onClick={() => {this.setSearchedMovies(input)}}><Search /></button>
        </div>
     );
}   
}

const mapDispatchToProps = dispatch => ({
    setMovies: movies => dispatch(setMovies(movies))
}) 

export default connect(null,mapDispatchToProps)(SearchField);