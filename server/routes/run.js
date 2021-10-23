const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const request = require("request");

  let lang;
  switch (req.body.mode) {
    case "python":
      lang = "py";
      break;
    case "c":
      lang = "c";
      break;
    case "c++":
      lang = "cpp";
      break;
    case "c#":
      lang = "cs";
      break;
    case "java":
      lang = "java";
      break;
    case "assembly":
      lang = "asm";
      break;
    case "javascript":
      lang = "js";
      break;
    default:
      lang = req.body.mode;
      break;
  }

  const content = req.body.value;
  var program = {
    stdin: req.body.input,
    files: [
      {
        name: `main.${lang}`,
        content,
      },
    ],
  };
  lang =
    req.body.mode === "c++"
      ? "cpp"
      : req.body.mode === "c#"
      ? "csharp"
      : req.body.mode;
  request(
    {
      url: `https://glot.io/api/run/${lang}/latest`,
      method: "POST",
      json: program,
      headers: {
        Authorization: "Token 256d9800-329c-40ee-b483-708344d30ec5",
      },
    },
    function (error, response, body) {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
      res.send(JSON.stringify(body.stdout ? body.stdout : body.stderr));
    }
  );
});

module.exports = router;
