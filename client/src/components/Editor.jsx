import React from "react";
import AceEditor from "react-ace";
import axios from "axios";
import Options from "./Options";
import CodeIO from "./CodeIO";

import { defaultValue } from "./defaultValue";

const Editor = () => {
  const [mode, setMode] = React.useState("c");
  const [value, setValue] = React.useState("");
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onValueChange = (newValue) => setValue(newValue);
  React.useEffect(() => setValue(defaultValue[mode]), [mode]);
  const run = () => {
    setIsLoading(true);
    axios
      .post("http://127.0.0.1:5000/api/run", {
        mode,
        value,
        input,
      })
      .then((response) => {
        setIsLoading(false);
        console.log("Output: " + response.data);
        setOutput(response.data);
      })
      .catch((error) => {
        console.log("The error is " + error);
      });
  };

  return (
    <div className="container">
      <div className="left">
        <h5>Options</h5>
        <Options mode={mode} setMode={setMode} run={run} />
      </div>
      <div className="right">
        <h5>Editor</h5>
        <AceEditor
          width="600px"
          placeholder="Your Code Goes Here !!!"
          mode={mode}
          value={value}
          theme="monokai"
          name="blah2"
          onChange={onValueChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 4,
          }}
        />
      </div>
      <div className="IO">
        <CodeIO
          isLoading={isLoading}
          input={input}
          setInput={setInput}
          output={output}
        />
      </div>
    </div>
  );
};

export default Editor;
