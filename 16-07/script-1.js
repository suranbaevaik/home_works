const form = document.querySelector('#form_1');

form.addEventListener('submit', () => {
    const userLastName = document.querySelector('#lastName');
    const userName = document.querySelector('#name');
    const userMiddleName = document.querySelector('#middleName');
    const userBirthDate = document.querySelector('#birthDate');
    const userPassportAddress = document.querySelector('#passportAddress');
    const userPassportNumber = document.querySelector('#passportNumber');
    const userPersonalNumber = document.querySelector('#personalNumber');
    const userReceivingDate = document.querySelector('#receivingDate');
    const userPhone = document.querySelector('#phone');
    const userEmail = document.querySelector('#email');
    const userBank = document.querySelector('#bank');
    const userAddress = document.querySelector('#address');

    console.log(userLastName.value);
    console.log(userName.value);
    console.log(userMiddleName.value);
    console.log(userBirthDate.value);
    console.log(userPassportAddress.value);
    console.log(userPassportNumber.value);
    console.log(userPersonalNumber.value);
    console.log(userReceivingDate.value);
    console.log(userPhone.value);
    console.log(userEmail.value);
    console.log(userBank.value);
    console.log(userAddress.value);
})