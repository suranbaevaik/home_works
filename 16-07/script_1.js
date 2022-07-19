const form = document.querySelector('#form_1');

form.addEventListener('submit', () => {
    const userLastName = document.querySelector('#lastName');
    const userName = document.querySelector('#name');
    const userMiddleName = document.querySelector('#middleName');
    const userBirthDate = document.querySelector('#birthDate');
    const userPassportAddress = document.querySelector('#passportAddress');
    const userPassportNumber = document.querySelector('#passportNumber');
    const userPersonalNumber = document.querySelector('#personalNumber');
    const passportReceivingDate = document.querySelector('#receivingDate');
    const userPhone = document.querySelector('#phone');
    const userEmail = document.querySelector('#email');
    const userBank = document.querySelector('#bank');
    const userAddress = document.querySelector('#address');

    localStorage.setItem('userLastName', userLastName.value);
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('userMiddleName', userMiddleName.value);
    localStorage.setItem('userBirthDate', userBirthDate.value);
    localStorage.setItem('userPassportAddress', userPassportAddress.value);
    localStorage.setItem('userPassportNumber', userPassportNumber.value);
    localStorage.setItem('userPersonalNumber', userPersonalNumber.value);
    localStorage.setItem('passportReceivingDate', passportReceivingDate.value);
    localStorage.setItem('userPhone', userPhone.value);
    localStorage.setItem('userEmail', userEmail.value);
    localStorage.setItem('userBank', userBank.value);
    localStorage.setItem('userAddress', userAddress.value);
    window.location = './form_2.html';
})