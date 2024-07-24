import React, { useState } from 'react';
import './MaxLengthInput.css';
import { v4 as uuidv4 } from 'uuid';

const MaxLengthInput = () => {
  const [inputs, setInputs] = useState([{ id: uuidv4(), title: '', text: '', maxChars: 1000 }]);

  const handleChange = (e, id, field) => {
    const newInputs = inputs.map(input => {
      if (input.id === id) {
        if (field === 'text' && e.target.value.length > input.maxChars) {
          return input;
        }
        return { ...input, [field]: e.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const addInput = () => {
    if (inputs.length < 5) {
      const newInput = { id: uuidv4(), title: '', text: '', maxChars: 1000 };
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
        <div key={input.id} className="input-container">
          <div className="input-info-box">
            <div className="input-id">{index + 1}</div>
            <button type="button" onClick={() => removeInput(input.id)}>Remove</button>
            <div className="char-count">
              {input.text.length}/{input.maxChars}
            </div>
          </div>
          <div className="input-box">
            <input
              type="text"
              value={input.title}
              onChange={(e) => handleChange(e, input.id, 'title')}
              placeholder="자소서"
              className="title-input"
            />
            <input
              type="number"
              value={input.maxChars}
              onChange={(e) => handleChange(e, input.id, 'maxChars')}
              placeholder="Max characters"
              className="max-chars-input"
            />
            <textarea
              value={input.text}
              onChange={(e) => handleChange(e, input.id, 'text')}
              placeholder="Write your text here..."
              rows="15"
              cols="180"
            />
          </div>
        </div>
      ))}
      <button onClick={addInput} disabled={inputs.length >= 5}>Add Input</button>
    </div>
  );
};

export default MaxLengthInput;
