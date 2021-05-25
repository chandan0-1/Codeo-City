// CodeMirror(document.querySelector("#codemirror-textarea"), {
//   lineNumbers: true,
//   tabSize: 4,
//   value: "",
//   mode: "python",
//   theme: "monokai",
// });

// // $(document).ready(function () {
// //   let code = $(".codemirror-textarea")[0];
// //   let editor = CodeMirror.fromTextArea(
// //     document.getElementById("codemirror-textarea"),
// //     {
// //       lineNumbers: true,
// //       mode: "htmlmixed",
// //       theme:'monokai'
// //     }
// //   );
// // });

{
  console.log(1)
  // method to submit the form data for new post using AJAX
  let createPost = function () {
    let newPostForm = $("#new-post-form");

    newPostForm.submit(function (e) {
      e.preventDefault();

      $.ajax({
        type: "post",
        url: "/send/request",
        data: newPostForm.serialize(),
        success: function (data) {
          // console.log(data.data.ans);
          // let newPost = newPostDom(data.data.ans);
          $("#output").text(data.data.ans);
        },
        error: function (err) {
          console.log(err.responseText);
        },
      });
    });
  };


  // Method to create a post in the DOM


  // let newPostDom = function(ans){
  //   return $(`<div id="Output-window">
  //             <p id="output-header">Output:</p>
  //             <p id="output"> ${ans}</p>
  //             </div>
  //           `);
  // }
  createPost();
}