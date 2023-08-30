import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";
import './search.scss'

const Search = () => {
  const toTop = () => {
    animateScroll.scrollToTop({
        delay: 0,
        duration: 0
    })
};
  return (
    <section className='search'>
        <h1>search</h1>
    </section>
  )
}

export default Search