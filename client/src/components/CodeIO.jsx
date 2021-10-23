import React from "react";

const CodeIO = (props) => {
  const { input, setInput, output, isLoading } = props;
  const onChange = (e) => setInput(e.target.value);

  return (
    <div>
      <table responsive="la">
        <thead>
          <tr>
            <td>
              <h5>Input</h5>
            </td>
            <td>
              <h5>Output</h5>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <textarea value={input} onChange={onChange} />
            </td>
            <td>
              <textarea
                disabled="disabled"
                value={isLoading ? "Compiling..." : output}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CodeIO;
