function getRepos() {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users/carmalou/repos', true);

    request.onload = function() {
      if(request.status >= 400) {
        reject(request.status);
        return;
      }
      var data = JSON.parse(request.responseText);
      resolve(data);
    }

    request.onerror = function() {
      reject(request.statusText); 
    }

    request.send();
  })
}

getRepos()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });