(function (){
  window.onload = function(){
    var green = document.getElementById('green');
    var red = document.getElementById('red');
    var orange = document.getElementById('orange');

    green.addEventListener("click", function(){
      sendPOST("1");
    });

    red.addEventListener("click", function(){
      sendPOST("2");
    });

    orange.addEventListener("click", function(){
      sendPOST("3");
    });

    var sendPOST = function(data) {
      var url="http://localhost/"; // リクエスト先URL
      //var data="test message"; // 送信データ ('param=value&...')
      var request = new XMLHttpRequest();
      request.open('POST', url);
      request.onreadystatechange = function () {
        if (request.readyState != 4) {
          console.log("リクエスト中");
        } else if (request.status != 200) {
          console.log("失敗");
        } else {
          console.log("成功");
          // var result = request.responseText;
        }
      };
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      request.send(data);
    }
  }
})();
