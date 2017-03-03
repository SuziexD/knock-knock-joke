var content = document.getElementById("inner-div");
var whosThere = document.getElementById("whos-there");

var oldContent = content.innerHTML;

whosThere.addEventListener("click", function() {
  content.innerHTML = oldContent + "<div id='who'><h2>Cows go</h2><button type='button' name='cow-goes-who' id='cow-goes-who'>Cow goes who?</button></div>";
  var cowsGoWho = document.getElementById("cow-goes-who");
  cowsGoWho.addEventListener("click", function() {
    var newContent = content.innerHTML;
    content.innerHTML = newContent + "<div id='punch-line'><h2>No, silly. Cows go moo!!!</h2><img src='http://cs419724.userapi.com/v419724485/373d/HV4mw0NKpho.jpg' alt='smiling cow'></div>";
  });
});
