import React, { useState } from "react";
import "../styles/output.css";
import Book from "./Book";
import { useBooks } from "../contexts/BookContext";
import Navigation from "./Navigation";
import Background from "./smallComponents/Background";

export default function Books() {
  // Destructure bookArray from the context state object
  const { state } = useBooks();
  const { bookArray } = state;

  // Navigation logic
  const [selectedOption, setSelectedOption] = useState("2023");
  // Change the year of books that is shown
  const handleYearChange = (option) => {
      setSelectedOption(option); 
  };

  const listBooks = bookArray
      .filter((book) => book.year === selectedOption)
      .map((book, index) => (
      <Book key={index} book={book} />
  ));


  return (
    <Background>
      <Navigation selectedOption={selectedOption} handleYearChange={handleYearChange} />

      <div className="flex flex-col lg:flex-row flex-wrap flex-none justify-center place-content-center gap-3 pt-2 w-full">
        {listBooks}
      </div>
    </Background>
  );
}