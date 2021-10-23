import React from "react";
import { Button, Form } from "react-bootstrap";

const languages = [
  "python",
  "c",
  "c++",
  "c#",
  "java",
  "javascript",
  "assembly",
];

const Options = (props) => {
  const { mode, setMode, run } = props;
  const onModeChange = (e) => setMode(e.target.value);

  return (
    <Form>
      <Form.Group controlId="Mode" /*style={{ maxWidth: 120 }} */>
        <Form.Label>Mode</Form.Label>
        <Form.Control
          as="select"
          name="mode"
          onChange={onModeChange}
          value={mode}
          className="inp"
        >
          {languages.map((lang) => (
            <option>{lang}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="outline-secondary" onClick={run}>
        Run
      </Button>
    </Form>
  );
};

export default Options;
