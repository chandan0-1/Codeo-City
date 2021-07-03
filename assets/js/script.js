var code
YUI().use("aui-ace-editor", function (Y) {
  var editor = new Y.AceEditor({
    boundingBox: "#myEditor",
    height: "650",
    mode: "",
    value: 'print("Hello world")',
    width: "1290",
  }).render();

  var mode = Y.one("#mode");
  var fileInput = Y.one("#value");

  console.log(fileInput)
  code = editor.get("value");


  if (mode) {
    var contents = {
      python: 'print("Hello World")',
      javascript: 'alert("Write something here...");',
      json: '{"value": "Write something here..."}',
      php: '<?php echo "Write something here..."; ?>',
      xml: '<value attr="something">Write something here...</value>',
      java: ''
    };

    var currentMode = "javascript";

    // console.log("editor")
    var updateValue = function () {
      editor.set("value", contents[currentMode]);
    };

    mode.on("change", function (event) {
      currentMode = this.val();
      editor.set("mode", currentMode);
      updateValue();
    });
  }
});

runbtn = document.getElementById("run-btn");
runbtn.addEventListener("click",function(){
  document.getElementById("code").value = code;
})

