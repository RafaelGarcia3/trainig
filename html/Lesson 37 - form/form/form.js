document.getElementById('exampleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const browser = document.getElementById('browser').value;
    const message = document.getElementById('message').value;

    document.getElementById('resultName').textContent = name;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultPass').textContent = pass;
    document.getElementById('resultBrowser').textContent = browser;
    document.getElementById('resultMessage').textContent = message;

    document.getElementById('resultBox').style.display = 'block';
});
