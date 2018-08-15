var btn = document.querySelector("#btn");
var priceDisplay = document.querySelector("#price");
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var currency = "EUR";
                                
btn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      var price = JSON.parse(XHR.responseText).bpi[currency].rate;
      priceDisplay.textContent = price + " " + currency;
    }
  }
  
  XHR.open("GET", url);
  XHR.send();
});