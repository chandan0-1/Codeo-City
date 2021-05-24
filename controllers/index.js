const request = require("request");
var ans = "Output will printed here..!!";

module.exports = function (req, res) {
  return res.send("<h1>Hello !</h1>");
};

module.exports.compiler = function (req, res) {
  return res.render("compiler", {
    out: ans,
  });
};

// let OutPut = document.getElementById("output");

module.exports.compile = async function (req, res) {
  // console.log(req.body);
  try {
    var options = {
      method: "POST",
      url: "https://codexweb.netlify.app/.netlify/functions/enforceCode",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    };

    request(options, function (error, response) {
      if (error) {
        console.log("Error arrises while fetching the data", error);
        return;
      }

      var temp = JSON.parse(response.body);
      ans = temp.output;
      console.log(ans);
    });

    return res.render("compiler", {
      out: ans,
    });
  } catch (err) {
    console.log(err);
    return;
  }

};
