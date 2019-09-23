import React from "react";

function BookRow(props) {
  const book = props.book;
  const author = props.author;
  let authors = book.authors.map(auth => {
    return auth.name;
  });

  if (authors.length == 2) {
    authors = authors.join(" and ");
  } else if (authors.length > 2) {
    authors = authors.join(", ");
  }
  return (
    <tr>
      <td>{book.title}</td>
      <td>{authors}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
}

export default BookRow;
