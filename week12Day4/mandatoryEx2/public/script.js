//Exercise 1 : Express & JSON

fetch("http://localhost:3000/api")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

function callAlert() {
  alert("Helo from JavaScript");
}
