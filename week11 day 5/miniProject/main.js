let nameTask = document.getElementById("nameTask");
let descTask = document.getElementById("descTask");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let objTasks = [];

function showInNewTab(infoToShow) {
  let dateToday = new Date();
  console.log(dateToday.getTime());
  let date1 = infoToShow[0]["start date"];
  date1 = new Date(date1);
  console.log(date1.getTime());
  let date2 = infoToShow[0]["end date"];
  date2 = new Date(date2);
  var Difference_In_Time = date2.getTime() - dateToday.getTime();
  var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  console.log(Difference_In_Days);
  document.getElementById("showTask").innerHTML = infoToShow[0].name;
  div = document.createElement("div");
  div.innerText = `Task name: ${infoToShow[0].name}
    Starting start: ${date1}
    ${Difference_In_Days} days left to complete the task
    `;
  //Description task: ${infoToShow[0].description}
  document.body.appendChild(div);
  render = window.open().document;
  render.body.appendChild(div);
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
