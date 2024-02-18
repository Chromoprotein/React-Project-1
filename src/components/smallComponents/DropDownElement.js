import { useState, useRef, useEffect } from "react";
import Button from "./Button";

export default function DropDownElement({ text, options, selectedOption, eventHandler }) {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Click outside the menu closes the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        // Bind the event listener, listens to clicks outside the menu
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

  return (

    <div className="relative" ref={dropdownRef}>

    <Button buttonType="button" buttonOnClick={toggleDropdown}>{text}</Button>

    {isOpen && (
      <div className="absolute mt-1 bg-white rounded-md shadow-lg">
        {options.map((option, index) => 
          <div 
            key={index} 
            className={`hover:bg-purple-800 hover:text-white first:hover:rounded-t first:rounded-t last:hover:rounded-b last:rounded-b odd:bg-purple-200 px-4 py-2 w-32 text-center ${selectedOption === option ? 'selectedOption' : ''}`} 
            onClick={() => eventHandler(option)}>
                {option}
            </div>
        )}
      </div>
    )}

    </div>

  );
}