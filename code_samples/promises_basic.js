function myProm() {
  return new Promise(function(resolve, reject) {
    resolve(5);
  });
}

function myProm2() {
  return new Promise(function(resolve, reject) {
    reject("We had an error.");
  });
}

myProm2()
  .then(function(response) {
    console.log("I resolved! " + response);
  })
  .catch(function(error) {
    console.log(error);
  })

myProm()
  .then(function(response) {
    console.log("I resolved! " + response);
  })
  .catch(function(error) {
    console.log(error);
  })