// Add your code here
const submitData = (name, email) => {
    let formData = {
        'name': name,
        'email': email
    }

    let configObj = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData) 
    }

    let body = document.querySelector('body')
    return fetch('http://localhost:3000/users', configObj)
    .then(res => res.json())
    .then(json => body.innerHTML = json.id) 
    .catch(error => { 
        alert('Error!');
        body.innerHTML = error.message;
    })
}