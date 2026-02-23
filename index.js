const btnElement = document.querySelector
('.btn');

const inputElement  = document.
getElementById('input');

const copyIconElement = document.
querySelector('.fa-copy');

const alertContainerElement = document.
querySelector('.alert-container');

btnElement.addEventListener('click', () => {
    createPassword()
})

copyIconElement.addEventListener('click', () => {
    copypassword();
    if (inputElement.value) {
        alertContainerElement.classList.remove("active");
        setTimeout(() => {
        alertContainerElement.classList.add("active");
    }, 2000);
    }
    
});

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 16;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1);
        
    }
    inputElement.value = password;
    alertContainerElement.innerText =
    password + " Copied!";
}

function copypassword() {
    inputElement.select();
    inputElement.setSelectionRange(0, 9999); // For mobile devices
    navigator.clipboard.writeText
    (inputElement.value);  
}