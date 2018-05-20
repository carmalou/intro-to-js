// shoutout to Devin Clark for this code
// read his blogpost about fetch: https://www.devin-clark.com/use-fetch.html

function toJSON(response) {
  return response.json();
}

window.fetch('https://api.github.com/users/carmalou/repos')
  .then(toJSON)
  .then(function (response) {
    console.log(response);
});