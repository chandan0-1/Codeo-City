const request = require("request");
var ans = "Output will printed here..!!";
const axios = require('axios')

module.exports.compiler = function (req, res) {
  return res.render("compiler", {
    out: ans,
  });
};

// let OutPut = document.getElementById("output");

module.exports.compile = async function (req, res) {
  console.log(req.body);
  const body = {
      "clientId": "a5da78a2d8b92d3a0c320aacff7d8a3d",
      "clientSecret": "7024caa570faff672f00a622dd12bedea1e204d226749edda3a199549d34d0da",
      "script": "print(\"Hello, World!\")",
      "stdin": "",
      "language": "python3",
      "versionIndex": "3",
      "compileOnly": false
    }
  try {
    var options = {
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    };

    request(options, function (error, response) {
      if (error) {
        console.log("Error arrises while fetching the data", error.data);
        return;
      }

      var temp = JSON.parse(response.body);
      if (temp) {
        ans = temp.output;
      }

      console.log(ans)
      if (req.xhr) {
        return res.status(200).json({
          data: {
            ans: ans,
          },
          message: "Compiled Successfully!",
        });
      }
    });

  } catch (err) {
    console.log(err);
    return;
  }
};


module.exports.compileJdoodle = async function (req, res) {
  console.log(req.body);
  const url = 'https://api.jdoodle.com/v1/execute'
  const body = {
      "clientId": "a5da78a2d8b92d3a0c320aacff7d8a3d",
      "clientSecret": "7024caa570faff672f00a622dd12bedea1e204d226749edda3a199549d34d0da",
      "script": req.body.code,
      "stdin": req.body.input,
      ...getLanguageSpecs(req.body.Language)
    }
  try {
    console.log(body,'jsdgjbd')
      axios.post(url, body)
      .then((response) => {
          console.log(response)

          return res.status(200).json({
            data: {
              ans: response.data.output,
            },
            message: "Compiled Successfully!",
          });
      }).catch( (err) => {
          if (err) {
              // console.log('Got error while making api call', err)
              return res.status(500).json(err.data);
          }
      })
  } catch (err) {
    // console.log(err);
    return;
  }
};

function getLanguageSpecs(language) {
  const mapList = {'py': {"language": "python3","versionIndex":"3"}};
  return mapList[language];
}