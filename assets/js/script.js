


// $("#category-header").change(function () {
//   var language = $("#category-header").val();
//   start()
// });

function start(){
    // let language = $("#category-header").val();
    // let d = {"java" : "text/x-java", "python": "python"}
    // language = d[language]
    // console.log(language)

    var codeText = $(".codemirror")[0];
    var editor = CodeMirror.fromTextArea(codeText, {
      lineNumbers: true,
      theme: "dracula",
      mode: "python"
    });
    editor.setSize("73vw", "66vh");
  };
start()


  
// method to submit the form data for new post using AJAX
 let submitForm = function () {
  let newPostForm = $("#code-form");

  newPostForm.submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: "post",
      url: "/send/request",
      data: newPostForm.serialize(),
      success: function (data) {
        $("#output").text(data.data.ans);
      },
      error: function (err) {
        console.log(err.responseText);
      },
    });
  });
}; 
submitForm();

