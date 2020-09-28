import React from 'react';
import './pagination.scss';

const Pagination = ({page, changePage}) => {

    return ( 
        <div className='pagination'>
        <button onClick={changePage} name='prev' disabled={page === 1 ? true : false}>{'<<'}</button>
        <span>{page}</span>
        <button onClick={changePage} name='next'>{'>>'}</button>
    </div>
     );
}
 
export default Pagination;