const request = require("request");
var ans = "Output will printed here..!!";

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
      if (temp) {
        ans = temp.output;
      }
      // $.("#output").html(ans);
      // $("#output").text("Hello world!");
      console.log(ans);
      if (req.xhr) {
        return res.status(200).json({
          data: {
            ans: ans,
          },
          message: "Post Created!",
        });
      }
    });

    // return res.redirect("back");
  } catch (err) {
    console.log(err);
    return;
  }
};
