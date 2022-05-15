
document.querySelector('form').addEventListener('submit',(e)=>{
	  e.preventDefault();
  const formData = new FormData(e.target);
  const values = JSON.stringify(Object.fromEntries(formData));
  console.log(values)
   document.getElementById("output").innerHTML = values
})