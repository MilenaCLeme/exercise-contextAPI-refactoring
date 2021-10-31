import React, { useContext } from 'react';
import Context from '../context/Context';

function Selector() {
  const { options, value, setvalue } = useContext(Context);

  return (
    <span>
      <h1>{`Selected: ${value}`}</h1>
      <select
        onChange={(e) => setvalue(e.target.value)}
        value={value}
      >
        {
        options.map((option) => (
        <option
        value={option}
        key={option}
        >
          {option}
        </option>
        ))
        }
      </select>
    </span>
  );
}

export default Selector;