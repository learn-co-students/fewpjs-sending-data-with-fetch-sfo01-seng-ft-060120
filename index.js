// Add your code here
function submitData(name, email){
  let formData = {
    name: name,
    email: email
  }; 
   
  let configObj = {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  };
   
  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    renderUser(object);
  })
  .catch(function(error) {
    document.body.innerHTML = error.message
  });
}

function renderUser(user) {
  const body = document.querySelector('body')
  const h3 = document.createElement('h3')
  h3.innerHTML = user.id
  body.appendChild(h3)   
}

document.addEventListener('DOMContentLoaded', function() {
  submitData('Steve Young #8', 'steve@steve.com')
})
    