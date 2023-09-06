/** @format */

// <script>
//       var moon = document.getElementById("moon");
//       var body = document.getElementById("body");
//       var sun_raise = document.getElementsByClassName("sun_raise")[0];

//       sun_raise.onclick = function () {
//         body.classList.toggle("navBar_visible");
//         var ulLi = document.querySelector("ul");

//         var li = ulLi.children[4];
//         var liEle = li.children[0];
//         var liAtt = liEle.className;
//         if (liAtt == "bi bi-moon-stars-fill") {
//           liEle.remove();
//           var liNewElement = document.createElement("i");
//           liNewElement.setAttribute("class", "bi bi-brightness-high");
//           liNewElement.setAttribute("id", "moon");
//           li.appendChild(liNewElement);
//           console.log(liNewElement);
//         } else if (liAtt == "bi bi-brightness-high") {
//           liEle.remove();
//           var liNewElement = document.createElement("i");
//           liNewElement.setAttribute("class", "bi bi-moon-stars-fill");
//           liNewElement.setAttribute("id", "moon");
//           li.appendChild(liNewElement);
//           console.log(liNewElement);
//         }
//       };
//     </script>

// alert("koagi0ahgss ");
var logo = document.getElementsByClassName("logo")[0];
console.log(logo.children[0]);
var toggleid = document.getElementById("toggle");
var toggleclass = document.getElementsByClassName("toggle")[0];
var container = document.getElementById("container");
var body = document.body;
var change_icon = document.getElementById("change_icon");
let content_btn = document.getElementsByClassName(".content_btn");

toggleclass.addEventListener("click", () => {
  toggleclass.classList.toggle("active");
  toggleid.classList.toggle("on");
  body.classList.toggle("navBar_visible");
  content_btn.classList.add("content_btn_2");
});
