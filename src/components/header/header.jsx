import React from 'react';
import {ReactComponent as Logo} from '../../assets/infinite.svg';
import SearchField from '../search-field/search-field';
import './header.scss';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
         }
    }
    render() { 
        return ( 
            <div className='header'>
                <Logo className='logo'/>
                <SearchField />
            </div>
         );
    }
}
 
export default Header;