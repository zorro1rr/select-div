import React, { useState } from 'react';




function Select() {
const [toggle, setToggle] = useState(false);
const [searchValue, setSearchValue] = useState('Search');
const options = [1, 2, 3, 4, 5]

  return (
    
<div className=" h-screen w-screen bg-green-600 flex justify-center items-center">
<div className="relative w-1/2">
<div className={`absolute w-full h-10 bg-gray-300  flex justify-center items-center z-10 ${!toggle ? 'rounded-t-xl': 'rounded-xl'}`} onClick={() => setToggle(!toggle)}>Select

</div>

 

 <div className={`absolute w-full  bg-gray-300 flex-col justify-center  items-center transform transition ${!toggle ? 'translate-y-full  rounded-b-xl' : '-translate-y-6 rounded-xl'}`}>{
   options.map((option) => {
     return <div className="h-10">Option{option}</div>
   })
 }</div>



</div>

</div>
  );
}

export default Select;