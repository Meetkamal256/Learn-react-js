import React from "react";

function BookList2() {
  // Book component
  const Book = ({ number, image, bookTitle, authorName, children }) => (
    <article className="book">
      <div className="book-number">{`# ${number}`}</div>
      <img src={image} alt="" />
      <h2>{bookTitle}</h2>
      <h4>{authorName}</h4>
      <div>{children}</div>
    </article>
  );
  // Define a list of books
  const books = [
    {
      id: 1,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg",
      bookTitle: "Atomic Habits",
      authorName: "James Clear",
      content: "First Paragraph",
    },
    {
      id: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
      bookTitle: "Fourth Wing",
      authorName: "Rebecca Yarros",
      content: "Second Paragraph",
    },
    {
      id: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg",
      bookTitle: "Iron Flame",
      authorName: "Rebecca Yarros",
      content: "Third Paragraph",
    },
    {
      id: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg",
      bookTitle: "Iron Flame",
      authorName: "Rebecca Yarros",
      content: "Third Paragraph",
    },
    {
      id: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg",
      bookTitle: "Iron Flame",
      authorName: "Rebecca Yarros",
      content: "Third Paragraph",
    },
    {
      id: 6,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg",
      bookTitle: "Iron Flame",
      authorName: "Rebecca Yarros",
      content: "Third Paragraph",
    },
  ];
  
  // Map over the list of books and create Book components
  const renderedBooks = books.map((book, index) => (
    <Book
      key={book.id}
      number={index +1}
      image={book.image}
      bookTitle={book.bookTitle}
      authorName={book.authorName}
    >
      <p>{book.content}</p>
      <button>Add to cart</button>
    </Book>
  ));
  
  return <section className="bookList">{renderedBooks}</section>;
}

export default BookList2; 