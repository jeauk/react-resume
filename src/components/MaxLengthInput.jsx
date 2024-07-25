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
          <table>
            <tbody>
              <tr>
                <th><label htmlFor={`title-${input.id}`}>유형</label></th>
                <td colSpan="3">
                  <input
                    type="text"
                    id={`title-${input.id}`}
                    value={input.title}
                    onChange={(e) => handleChange(e, input.id, 'title')}
                    placeholder="자기소개서 유형"
                    className="title-input"
                  />
                </td>
              </tr>
              <tr>
                <th><label htmlFor={`maxChars-${input.id}`}>글자수</label></th>
                <td>
                  <input
                    type="number"
                    id={`maxChars-${input.id}`}
                    value={input.maxChars}
                    onChange={(e) => handleChange(e, input.id, 'maxChars')}
                    placeholder="최대 글자수 설정"
                    className="max-chars-input"
                  />
                </td>
                <th>카운트</th>
                <td>
                  <div className="char-count">
                    {input.text.length}/{input.maxChars}
                  </div>
                </td>
              </tr>
              <tr>
                <th><label htmlFor={`text-${input.id}`}>Text</label></th>
                <td colSpan="3">
                  <textarea
                    id={`text-${input.id}`}
                    value={input.text}
                    onChange={(e) => handleChange(e, input.id, 'text')}
                    placeholder="Write your text here..."
                    rows="15"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <div className="button-container">
                    <button 
                      type="button" 
                      onClick={() => removeInput(input.id)}
                    >
                      Remove
                    </button>
                    <button 
                      type="button" 
                      onClick={addInput}
                      disabled={inputs.length >= 5} 
                      className="add-input-button"
                    >
                      Add Input
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MaxLengthInput;