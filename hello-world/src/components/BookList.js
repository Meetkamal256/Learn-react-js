import React from "react";

function BookList() {
  const Image = (props) => (
    <img src="https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg" />
  );
  const Title = (props) => {
    return <h2>{props.bookTitle}</h2>;
  };
  const Author = (props) => {
    return <h4>{props.authorName}</h4>;
  };
  const Book = (props) => {
    return (
      <article className="book">
        <Image />
        <Title bookTitle={props.bookTitle} />
        <Author authorName={props.authorName} />
      </article>
    );
  };
  
  return (
    <section className="bookList">
      <Book bookTitle="Atomic Habits" authorName="James Clear" />
      <Book bookTitle="Second book" authorName="Jordan Moore" />
      <Book bookTitle="third book" authorName="Jordan Moore" />
      <Book bookTitle="Fourth book" authorName="Jordan Moore" />
      <Book bookTitle="Fifth book" authorName="Jordan Moore" />
      <Book bookTitle="Sixth book" authorName="Jordan Moore" />
    </section>
  );
}

export default BookList;
