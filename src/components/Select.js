import React, { useState } from 'react';

function Select() {
  const [toggle, setToggle] = useState(false);
  const [selected, selectedToggle] = useState(null);
  const options = [1, 2, 3, 4, 5];

  function handlekeyDownSelect(e, option) {
    if (e.charCode === 13) {
      console.log('hitting this', option);
      selectedToggle(option);
    }
  }

  return (
    <div className=" h-screen w-screen bg-green-600 flex justify-center items-center">
      <div className="relative w-1/2">
        <button
          id="selectLabel"
          className="absolute w-full h-10 rounded-xl bg-gray-300 flex justify-center items-center z-10"
          onClick={() => setToggle(!toggle)}
        >
          {selected ? `Option ${selected}` : 'Select'}
        </button>

        <ul
          role="listbox"
          aria-labelledby="selectLabel"
          style={{ top: '30px' }}
          className={`absolute w-full pt-3  bg-gray-300 flex-col justify-center  items-center transform transition ease-in ${
            toggle
              ? 'translate-y-0 opacity-100  rounded-b-xl'
              : '-translate-y-20 rounded-xl opacity-0 '
          }`}
        >
          {options.map((option) => {
            return (
              <li
                role="option"
                aria-selected={selected === option}
                tabIndex="0"
                key={option}
                className={`px-4 justify-between flex items-center h-10 border-t border-slate-800 cursor-pointer ${
                  selected === option ? 'bg-slate-400' : 'bg-none'
                }`}
                onClick={() => selectedToggle(option)}
                onKeyPress={(e) => {
                  handlekeyDownSelect(e, option);
                }}
              >
                Option {option}
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/book.png"
                  alt="book"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Select;
