// let button = document.getElementById("submit");

// // button.addEventListener("click", (e) => {
// //   console.log("working");
// //   e.preventDefault();

// let email = document.getElementById("email").value;
// let message = document.getElementById("message").value;
// fetch("http://localhost:3000/formData", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ email, message }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.email, data.message);
//     JSON.stringify(data);
//     // let h3 = document.createElement("h3");
//     // let div = document.getElementById("toShow");
//     // h3.innerHTML = data.email + ": " + data.message;
//     // div.append(h3);
//   })
//   .catch((err) => console.log(err));
// // });
