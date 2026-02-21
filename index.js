const btnElement = document.querySelector
('.btn');
const inputElement  = document.
getElementById('input');
const copyIconElement = document.
querySelector('.fa-clone');

btnElement.addEventListener('click', () => {
    createPassword()
})

copyIconElement.addEventListener('click', () => {
    copypassword();
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

}