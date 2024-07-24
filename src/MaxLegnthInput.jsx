import React, { useState } from 'react';

const MaxLengthInput = () => {
  const [text, setText] = useState("");
  const maxLength = 50;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Write your text here..."
        rows="10"
        cols="50"
      />
      <div>
        {text.length}/{maxLength} characters
      </div>
    </div>
  );
};

export default MaxLengthInput;
