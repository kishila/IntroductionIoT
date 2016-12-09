(function (){
  window.onload = function(){
    var msgbox = document.getElementById("msgs");
    var green= document.getElementById('green');

    green.addEventListener("click", function(){
      var ws = new WebSocket('ws://' + "localhost");

      ws.onopen = function() {
        console.log("connection opened");
        ws.send("test message");
        ws.closed();
      }
      ws.onclose = function() {
        console.log("connection closed");
      }
      ws.onmessage = function(m) {
        var li = document.createElement("li");
        li.textContent = m.data;
        msgbox.insertBefore(li, msgbox.firstChild);
      }
    });
  }
})();
