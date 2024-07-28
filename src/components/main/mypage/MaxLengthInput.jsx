import React from 'react';
import './MaxLengthInput.css';

const MaxLengthInput = ({ maxLengthInput = [] }) => {
  return (
    <div>
      {maxLengthInput.map((input) => (
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
                    placeholder="내용을 입력하세요"
                    rows="15"
                  />
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
