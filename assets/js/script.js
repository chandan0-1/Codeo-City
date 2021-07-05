
function start(){
    var codeText = $(".codemirror")[0];
    var editor = CodeMirror.fromTextArea(codeText, {
      lineNumbers: true,
      theme: "dracula",
      mode: "python",
      indentUnit: 4
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

