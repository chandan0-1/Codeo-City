const request = require("request");

module.exports = function (req, res) {
  return res.send("<h1>Hello !</h1>");
};

module.exports.compiler = function (req, res) {
  return res.render('compiler')
};

module.exports.output = async function (req, res) {
  console.log(req.body);
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
      if (error){
        console.log("Error arrises while fetching the data",error); 
        return;
        // throw new Error(error);
      } 
      var res = JSON.parse(response.body);
      console.log(res.output)
      return res.redirect("compiler");
    });
  } 
  
   
  catch (err) {
    console.log(err);
    return;
  }
};

