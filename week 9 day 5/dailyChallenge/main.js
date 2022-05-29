fetch('https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes')
	.then(resp => resp.json())
	.then(function(resp){
		console.log(resp.supported_codes)
	})
	.catch(error => console.log(error))