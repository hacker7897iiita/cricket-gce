function fun() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    var result = xhttp.responseText;
    result = JSON.parse(result);
    document.getElementById("demo").innerText = result.creditsLeft;
    $("demo2").text("hello world");
   }
 }
  xhttp.open("GET", "http://cricapi.com/api/cricket?apikey=cqK4ZQ0T0pSeTmdEMivESze9XKu1", true);
  xhttp.send();

  chrome.storage.sync.get('myval',function(data){
    if(data.myval){
     document.getElementBuId("btn1").checked = true;
    }
  });
  document.getElementById("btn2").onclick = function(){
      $("demo2").text("hello world");
  };
  document.getElementById("btn1").onclick = function(){
    var value = document.getElementById("btn1").checked;

    chrome.storage.sync.set({'myval': value},function(){
        alert('Success');
    });
  };

};
setInterval(function(){
  fun();
},50);
