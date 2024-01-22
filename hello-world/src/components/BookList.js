import React from "react";

function BookList() {
  const Image = (props) => (
   <img src={props.image} alt="" />
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
        <Image image={props.image}/>
        <Title bookTitle={props.bookTitle} />
        <Author authorName={props.authorName} />
      </article>
    );
  };
  
  return (
    <section className="bookList">
      <Book
        image="https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg"
        bookTitle="Atomic Habits"
        authorName="James Clear"
      />
      <Book
        image="https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg"
        bookTitle="Fourth Wing"
        authorName="Rebecca Yarros"
      />
      <Book
        image="https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg"
        bookTitle="Iron Flame"
        authorName="Rebecca Yarros"
      />

      <Book
        image="https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg"
        bookTitle="Atomic Habits"
        authorName="James Clear"
      />
      <Book
        image="https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg"
        bookTitle="Fourth Wing"
        authorName="Rebecca Yarros"
      />
      <Book
        image="https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg"
        bookTitle="Iron Flame"
        authorName="Rebecca Yarros"
      />
    </section>
  );
}

export default BookList;