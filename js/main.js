$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

var wrapper = document.querySelector(".wrapper-main-subTitle");
var text = document.querySelector(".main-subTitle-text");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 75 * i);
  }(i));
}

