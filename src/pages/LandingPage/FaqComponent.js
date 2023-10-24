import React, { useState } from "react";

const FaqComponent = ({ id, ques, ans }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-[#2D2D2D] text-white py-3 px-6 rounded-lg" onClick={toggle}>
        <h1 className="text-xl">{`${id + 1}. ${ques}`}</h1>
        <div
      className={`w-8 h-8 flex items-center justify-center transform ${
        isOpen ? '-rotate-180 mt-[5px]' : 'rotate-0'
      } cursor-pointer transition-transform duration-800`}
      onClick={toggle}
    >
      <span className="text-xl">
        {isOpen ? 'x' : '+'}
      </span>
    </div>
      </div>
      {isOpen ? <div className="bg-white py-3 px-6 rounded-b-lg">{ans}</div> : null}
    </div>
  );
};

export default FaqComponent;
