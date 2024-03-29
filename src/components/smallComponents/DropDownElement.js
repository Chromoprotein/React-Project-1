import { useState, useRef } from "react";
import Button from "./Button";
import useGenericKeyDown from "../../utils/useGenericKeyDown";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

export default function DropDownElement({ text, name, options, selectedOption, eventHandler, testId }) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Click outside the menu closes the menu
  // If the click target is not contained within dropdownRef.current, it's outside the menu
  useOutsideAlerter(dropdownRef, isOpen, setIsOpen);

  // Accessibility
  // (selectedItem) => { ... } is a callback function (handleEnter) which is excuted by pressing enter
  const handleKeyDown = useGenericKeyDown((selectedItem) => {
    const option = selectedItem.getAttribute('data-option-value'); 
    const name = selectedItem.getAttribute('data-name');
    const simulatedEvent = {
      target: { name: name, value: option },
    };
    eventHandler(simulatedEvent);
    setIsOpen(false);
  }, { next: 'ArrowDown', prev: 'ArrowUp' });

  return (
    <>
      <Button testId={testId} buttonType="button" buttonOnClick={toggleDropdown}>{selectedOption ? text + ": " + selectedOption : text}</Button>
      
      <div className="relative" ref={dropdownRef}>

        {isOpen && (
          <ul 
            tabIndex="0" 
            role="listbox" 
            className="fixed inset-0 md:inset-auto md:right-2 z-50 md:absolute md:z-10 md:mt-1 bg-white md:rounded-md shadow-lg w-screen md:w-32 h-fit">

            {options.map((option, index) => {
              // Simulate an event object
              const simulatedEvent = {
                  target: {name: name, value: option,}
              };
              return <li
                key={index} 
                // for screen readers
                role="option" 
                aria-selected={option === selectedOption ? "true" : "false"}
                tabIndex="0" 
                data-option-value={option}
                data-name={name}
                // Other stuff
                className={`selectable-item hover:bg-purple-800 hover:text-white md:first:hover:rounded-t md:first:rounded-t md:last:hover:rounded-b md:last:rounded-b px-4 py-2 h-20 md:h-12 flex justify-center items-center ${selectedOption === option && "bg-purple-800"}`} 
                onClick={() => {
                    eventHandler(simulatedEvent);
                    setIsOpen(false);
                }}
                onKeyDown={handleKeyDown}>
                  {option}
                </li>
            })}
            
          </ul>
        )}

      </div>
    </>
  );
}