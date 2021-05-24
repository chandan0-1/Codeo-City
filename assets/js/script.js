CodeMirror(document.querySelector("#codemirror-textarea"), {
  lineNumbers: true,
  tabSize: 4,
  value: "",
  mode: "python",
  theme: "monokai",
});

// $(document).ready(function () {
//   let code = $(".codemirror-textarea")[0];
//   let editor = CodeMirror.fromTextArea(
//     document.getElementById("codemirror-textarea"),
//     {
//       lineNumbers: true,
//       mode: "htmlmixed",
//       theme:'monokai'
//     }
//   );
// });
