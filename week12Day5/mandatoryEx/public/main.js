let button = document.getElementById("submit");

button.addEventListener("click", (e) => {
  console.log("working");
  e.preventDefault();
  let item = document.getElementById("item").value;
  let amount = document.getElementById("amount").value;
  fetch("http://localhost:5000/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item, amount }),
  })
    .then((res) => res.json())
    .then((item) => {
      console.log(item.item, item.amount);
      JSON.stringify(item);
      let h3 = document.createElement("h3");
      let div = document.getElementById("toShow");
      h3.innerHTML = item.item + ": " + item.amount;
      div.append(h3);
    })
    .catch((err) => console.log(err));
});
