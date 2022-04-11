import React, { useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare,AiOutlineMinusSquare } from "react-icons/ai";

import './styles/Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);
  const onMinusHandler = () => setCount(count - 1);
  const onPlusHandler = () => setCount(count + 1);


  return (
    <div className="counter">
      <div className="counter__buttons">
        <button className="counter__buttons__plus" onClick={onPlusHandler}><AiFillPlusSquare/></button>
        <button className="counter__buttons__minus" onClick={onMinusHandler} disabled={ count === 0 }>{(count===0) ? <AiOutlineMinusSquare/> : <AiFillMinusSquare/>}</button>
      </div>
      <div className="counter__text"><p>To Order:</p><p>{count}</p></div>
    </div>
  );
};

export default Counter;
