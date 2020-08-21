// Add your code here


function submitData(name, email) {

    let formData = {
        name,
        email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };


    return fetch('http://localhost:3000/users', configObj)
      .then(function(response){
        return response.json()
    })
      .then(function(returnObject) {
        document.body.innerHTML = returnObject[ "id" ]
      })
      .catch(function(errorObject) {
        document.body.innerHTML = errorObject.message
      })
}