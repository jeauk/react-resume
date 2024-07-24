import React, { useState, useEffect, useRef } from 'react';
import './MaxLengthInput.css';
import { v4 as uuidv4 } from 'uuid';

const MaxLengthInput = () => {
  const [inputs, setInputs] = useState([{ id: uuidv4(), text: '' }]);
  const maxLength = 50;
  const endRef = useRef(null);

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

  useEffect(() => {
    if (inputs.length > 1) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [inputs]);

  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id} className="input-container">
          <textarea
            value={input.text}
            onChange={(e) => handleChange(e, input.id)}
            placeholder="Write your text here..."
            rows="10"
            cols="50"
          />
          <div>
            {input.text.length}/{maxLength} characters
          </div>
          <button onClick={() => removeInput(input.id)}>Remove</button>
        </div>
      ))}
      <button onClick={addInput} disabled={inputs.length >= 5}>Add Input</button>
      <div ref={endRef}></div>
    </div>
  );
};

export default MaxLengthInput;
