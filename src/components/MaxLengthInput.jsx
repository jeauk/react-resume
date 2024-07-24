import React, { useState } from 'react';
import './MaxLengthInput.css';
import { v4 as uuidv4 } from 'uuid';

const MaxLengthInput = () => {
  const [inputs, setInputs] = useState([{ id: uuidv4(), text: '' }]);
  const maxLength = 1000;

  const handleChange = (e, id) => {
    const newInputs = inputs.map(input => {
      if (input.id === id) {
        return { ...input, text: e.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const addInput = () => {
    if (inputs.length < 5) {
      const newInput = { id: uuidv4(), text: '' };
      setInputs([...inputs, newInput]);
    }
  };

  const removeInput = (id) => {
    if (inputs.length > 1) {
      setInputs(inputs.filter(input => input.id !== id));
    }
  };

  return (
    <div>
      {inputs.map((input, index) => (
          <form action="">
        <div key={input.id} className="input-container">
          <div className="input-info-box">
            <div className="input-id">{index + 1}</div>
            <button onClick={() => removeInput(input.id)}>Remove</button>
            {input.text.length}/{maxLength} 
          </div>
          <textarea
            value={input.text}
            onChange={(e) => handleChange(e, input.id)}
            placeholder="Write your text here..."
            rows="15"
            cols="180"
            />
        </div>
            </form>
      ))}
      <button onClick={addInput} disabled={inputs.length >= 5}>Add Input</button>
    </div>
  );
};

export default MaxLengthInput;
