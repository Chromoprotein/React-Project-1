import React, { useState, useEffect } from "react";
import "../styles/books.css";
import Button from "./smallComponents/Button";
import { useBooksActions } from "../contexts/BookContext";
import DropDownElement from "./smallComponents/DropDownElement";
import { yearsArray } from "../utils/yearsArray";
import Background from "./smallComponents/Background";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useBooks } from "../contexts/BookContext";
import SmallInfoContainer from "./smallComponents/SmallInfoContainer";
import returnAfterTimeout from "../utils/returnAfterTimeout";
import { v4 as uuidv4 } from 'uuid';
import { FaRegStar, FaStar } from "react-icons/fa";
import IconContainer from "../components/smallComponents/IconContainer";
import genreArray from "../utils/genreArray";
import useGenericKeyDown from "../utils/useGenericKeyDown";
import TextAreaElement from "../components/smallComponents/TextAreaElement";
import InputElement from "../components/smallComponents/InputElement";
import LinkButton from "./smallComponents/LinkButton";

export default function BookForm() { 

  const { state } = useBooks();
  const { bookArray } = state;

  // For edit pages
  const { id } = useParams();

  const emptyForm = id 
  ? bookArray.find((book) => book.id === id) 
  : {
    title: "",
    author: "",
    imgSrc: "",
    year: "",
    review: "",
    genre: "",
    stars: "",
  };

  const [formState, setFormState] = useState(emptyForm);
  const [successMessage, setSuccessMessage] = useState('');

  const { dispatch } = useBooksActions();

  // To return after submitting the form
  const navigate = useNavigate();

  // For disabling the submit button if the form isn't completely filled
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const isEmpty = Object.values(formState).some(field => field === null || field === '');
    setIsDisabled(isEmpty);
  }, [formState]); // This effect depends on formState and runs whenever formState changes

  const handleFormChange = (e) => {
    if (e.target.type === 'file') {
      if (formState.imgSrc) {
        URL.revokeObjectURL(formState.imgSrc);
      }
      const uploadedImage = URL.createObjectURL(e.target.files[0]);
      setFormState(prevState => ({
        ...prevState,
        [e.target.name]: uploadedImage,
      }));
    } else {
      setFormState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(id) {
      // Dispatch an action to edit a book
      setIsDisabled(true);
      dispatch({ type: "EDIT_BOOK", payload: formState });
      setSuccessMessage("Changes saved");
      returnAfterTimeout(navigate, `/book/${encodeURIComponent(id)}`);
    } else {
      // Dispatch an action to add a new book
      setIsDisabled(true);
      const uniqueId = uuidv4();
      dispatch({ type: "ADD_BOOK", payload: {...formState, id: uniqueId} });
      setSuccessMessage("New book uploaded");
      returnAfterTimeout(navigate, `/book/${encodeURIComponent(uniqueId)}`);
    }
  };

  const handleDelete = () => {
    setIsDisabled(true);
    dispatch({ type: "DELETE_BOOK", payload: formState })
    setSuccessMessage("Book deleted");
    returnAfterTimeout(navigate, "/");
  }

  // Accessibility
  // (selectedItem) => { ... } is a callback function (handleEnter) which is excuted by pressing enter
  const handleKeyDown = useGenericKeyDown((selectedItem) => {
    const index = parseInt(selectedItem.getAttribute('value'), 10); 
    const simulatedEvent = {
      target: {name: "stars", value: index + 1,}
    };
    handleFormChange(simulatedEvent);
  }, { next: 'ArrowRight', prev: 'ArrowLeft' });

  return (
    <Background>
        <form className="bg-slate-800 rounded-lg p-3 w-96 flex flex-col justify-center items-center mx-auto" onSubmit={handleSubmit}>

            <div>
              <input 
                type="file" 
                name="imgSrc"
                id="file-upload" 
                className="hidden" 
                onChange={handleFormChange} 
              />
              <Button
                buttonType="button"
                buttonOnClick={() => document.getElementById('file-upload').click()}>
                  Upload Image
              </Button>
              {formState.imgSrc && <img src={formState.imgSrc} alt="Uploaded" />}
            </div>

            <InputElement labelText="Book name" name="title" value={formState.title} onChange={handleFormChange} />

            <InputElement labelText="Author name" name="author" value={formState.author} onChange={handleFormChange} />

            <DropDownElement text="Read year" name="year" options={yearsArray} selectedOption={formState.year} eventHandler={handleFormChange} />

            <DropDownElement text="Genre" name="genre" options={genreArray} selectedOption={formState.genre} eventHandler={handleFormChange} />

            <TextAreaElement labelText="Write a short review" name="review" value={formState.review} onChange={handleFormChange} />

            <IconContainer>
                {[...Array(5)].map((_, index) => {
                    const simulatedEvent = {
                      target: {name: "stars", value: index + 1,}
                    };
                    return <span 
                      key={index} 
                      value={index}
                      tabIndex="0" 
                      className="selectable-item text-purple-800" 
                      onKeyDown={handleKeyDown}
                      role="button"
                      aria-label={`Rate ${index} star${index > 1 ? 's' : ''}`}
                      onClick={() => handleFormChange(simulatedEvent)}>
                        {index < formState.stars ? <FaStar size="28px" /> : <FaRegStar size="28px" />}
                    </span>
                })}
            </IconContainer>

            {successMessage && <SmallInfoContainer>
              {successMessage}
            </SmallInfoContainer>}

            <Button buttonType="submit" isDisabled={isDisabled}>
              Submit
            </Button>

          </form>

          <nav>
            <LinkButton url={`/`}>Return</LinkButton>

            {id && <Button buttonType="button" buttonOnClick={handleDelete}>
              Delete
            </Button>}
          </nav>
    </Background>
  );
}
