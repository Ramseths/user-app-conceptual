const btnCreate = document.querySelector('#btnCreate');
console.log(btnCreate);
const url = 'http://localhost:3200/create';

btnCreate.addEventListener('click', (e) => {
    e.preventDefault();
    const id = Number(document.querySelector('#id').value);
    const userName = document.querySelector('#user').value;
    if (id && userName) {
        const user = {
            id: id,
            user: userName
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((res) => { return res.json() }).then(data => {
            alert(data.message);
        }).catch(e => alert(e));
    } else {
        alert('Ingresa los datos por favor');
    }

});