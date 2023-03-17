const form = document.querySelector('form');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // validate email and password

    if (email === 'example@gmail.com' && password === 'password') {
        alert('Login succesful');
    } else {
        alert('invalid email or password. please try again');
    }
});

