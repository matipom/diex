let nameTask = document.getElementById("nameTask");
let descTask = document.getElementById("descTask");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let objTasks = [];

function showInNewTab(infoToShow) {
  document.getElementById("showTask").innerHTML = infoToShow[0].name;
  div = document.createElement("div");
  div.innerText = `Task name: ${infoToShow[0].name}
    Description task: ${infoToShow[0].description}
    Date of start: ${infoToShow[0]["start date"]}
    Date of end: ${infoToShow[0]["end date"]}`;

  document.body.appendChild(div);
  render = window.open().document;

  render.body.appendChild(div);

  // let newDiv = document.createElement("div");
  // let info = document.createTextNode("Hola");
  // let a = newDiv.append(info);
  // document.body.append(a);
  // // newPage.append(newDiv);
  // render.body.appendChild(a);
}

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  objTasks.push({
    name: nameTask.value,
    description: descTask.value,
    "start date": startDate.value,
    "end date": endDate.value,
  });
  console.log(objTasks);

  localStorage.setItem("storedTask", JSON.stringify(objTasks));

  let storedJsonPosts = localStorage.getItem("storedTask");
  let infoToShow = JSON.parse(storedJsonPosts);
  console.log(infoToShow);
  showInNewTab(infoToShow);
});
