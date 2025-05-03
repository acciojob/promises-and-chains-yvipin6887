document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
	
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const age = document.getElementById("age").value.trim();
    const name = document.getElementById("name").value.trim();
	  if (!age || !name) {
		  
		alert('Please enter valid details.')

		  return;
	  }

	  new Promise((resolve) => {
		  setTimeout(() => resolve(), 4000)
	  }). then(() => {
		  if (age > 18) {
			  alert(`Welcome, ${name}. You can vote.`);
		  } else {
			  alert(`Oh sorry, ${name}. You aren't old enough.`);
		  }
	  })

    
  });
});
