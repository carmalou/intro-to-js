function getData(callbackFunc) {
  var req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/carmalou/repos', true);

  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
      // Success!
      var data = JSON.parse(req.responseText);
      callBackFunc(data);
    } else {
      // We reached our target server, but it returned an error

    }
  };

  req.onerror = function() {
    // There was a connection error of some sort
  };

  req.send();
}

function callBackFunc(data) {
  for(var i = 0; i < data.length; i++) {
    console.log(data[i].name);
  }
}

getData(callBackFunc);