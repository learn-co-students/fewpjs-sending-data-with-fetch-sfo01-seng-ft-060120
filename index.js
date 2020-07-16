function submitData (userName, userEmail) {

    let formData = {
        name: userName,
        email: userEmail
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            document.body.innerHTML = object["id"];
        })
        .catch(function(error){
            alert("Uh oh! Something went wrong...");
            console.log(error.message);
        });

}