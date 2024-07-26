import React, { useState } from 'react';
import './MaxLengthInput.css';
import { v4 as uuidv4 } from 'uuid';

const MaxLengthInput = (props) => {
  const [inputs, setInputs] = useState([{ uuid: uuidv4(), title: '', text: '', maxChars: 1000 }]);

  const handleChange = (e, uuid, field) => {
    const newInputs = inputs.map(input => {
      if (input.uuid === uuid) {
        if (field === 'text' && e.target.value.length > input.maxChars) {
          return input;
        }
        return { ...input, [field]: e.target.value };
      }
      return input;
    });
    setInputs(newInputs);

    // props.setMaxLengthInput를 사용하여 부모 컴포넌트의 상태 업데이트
    props.setMaxLengthInput(newInputs);
  };

  const addInput = () => {
    if (inputs.length < 5) {
      const newInput = { uuid: uuidv4(), title: '', text: '', maxChars: 1000 };
      const newInputs = [...inputs, newInput];
      setInputs(newInputs);

      // props.setMaxLengthInput를 사용하여 부모 컴포넌트의 상태 업데이트
      props.setMaxLengthInput(newInputs);
    }
  };

  const removeInput = (uuid) => {
    if (inputs.length > 1) {
      const newInputs = inputs.filter(input => input.uuid !== uuid);
      setInputs(newInputs);

      // props.setMaxLengthInput를 사용하여 부모 컴포넌트의 상태 업데이트
      props.setMaxLengthInput(newInputs);
    }
  };

  const openSpeller = () => {
    window.open('http://speller.cs.pusan.ac.kr/', '_blank', 'width=846,height=708');
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={input.uuid} className="input-container">
          <table>
            <tbody>
              <tr>
                <th><label htmlFor={`title-${input.uuid}`}>유형</label></th>
                <td colSpan="3">
                  <input
                    type="text"
                    id={`title-${input.uuid}`}
                    value={input.title}
                    onChange={(e) => handleChange(e, input.uuid, 'title')}
                    placeholder="자기소개서 유형"
                    className="title-input"
                  />
                </td>
              </tr>
              <tr>
                <th><label htmlFor={`maxChars-${input.uuid}`}>글자수</label></th>
                <td>
                  <input
                    type="number"
                    id={`maxChars-${input.uuid}`}
                    value={input.maxChars}
                    onChange={(e) => handleChange(e, input.uuid, 'maxChars')}
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
                <th><label htmlFor={`text-${input.uuid}`}>내용</label></th>
                <td colSpan="3">
                  <textarea
                    id={`text-${input.uuid}`}
                    value={input.text}
                    onChange={(e) => handleChange(e, input.uuid, 'text')}
                    placeholder="내용을 입력하세요"
                    rows="15"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <div className="button-container">
                    <button
                      type="button"
                      onClick={() => removeInput(input.uuid)}
                      className="remove-button"
                    >Delete
                    </button>
                    <button
                      type="button"
                      onClick={addInput}
                      disabled={inputs.length >= 5}
                      className="add-input-button"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={openSpeller}
                      className="open-speller-button"
                    >
                      부산대 맞춤법 검사기 열기
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
