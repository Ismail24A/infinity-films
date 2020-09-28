import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header/header';
import Pagination from './components/pagination/pagination';
import MoviesPreview from './components/movies-preview/movies-preview';
import { setMovies } from './redux/actions';


const API_KEY = '04c35731a5ee918f014970082a0088b1';
const API_URL = 'https://api.themoviedb.org/3/';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
        page: 1
     }
}

  changePage = (event) => {
    const {name} = event.target;
    if (name === 'next') {
        this.setState({page: this.state.page+1}, 
            () => this.callAPI(this.state.page) );
    }
    else if (name === 'prev') {
        this.setState({page: this.state.page-1}, 
            () => this.callAPI(this.state.page) );
    }
  }
  callAPI(page){
    fetch(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`)
    .then(data => data.json())
    .then(({results}) => {
    this.props.setMovies(results)
    });
  }

  componentDidMount(){
    fetch(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`)
    .then(data => data.json())
    .then(data => {
        this.props.setMovies(data.results);     
    });
  }

render(){
  return (
    <>
      <Header />
      <MoviesPreview />
      <Pagination changePage={this.changePage} page={this.state.page}/>
    </>
  );
}
}
const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch(setMovies(movies))
});


export default connect(null, mapDispatchToProps)(App);
