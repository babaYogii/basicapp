import React from 'react'
import Image from './Image'
import Heading from "./Heading";
import Author from './Author';
import './BookList.css'

const author = "Author:- J.M. Barrie";

const Book = () => {

    const title='Best of Children’s Classics '
  return (
    <div className="book">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/81CxXmRFnBL._AC_UL302_SR302,200_.jpg"
        alt="Loading"
      />
      <h2>{title.toUpperCase()}</h2>
      <h5>{author}</h5>
    </div>
  );
}

export default Book
