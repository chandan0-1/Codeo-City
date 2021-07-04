// {
//   // method to submit the form data for new post using AJAX
//   let submitForm = function () {
//     let newPostForm = $("#new-post-form");

//     newPostForm.submit(function (e) {
//       e.preventDefault();

//       $.ajax({
//         type: "post",
//         url: "/send/request",
//         data: newPostForm.serialize(),
//         success: function (data) {
//           $("#output").text(data.data.ans);
//         },
//         error: function (err) {
//           console.log(err.responseText);
//         },
//       });
//     });
//   };


//   submitForm();
// }

// // console.log(document.getElementById("myWrapper").innerText);