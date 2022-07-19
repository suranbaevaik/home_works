const form = document.querySelector('#form_2');

form.addEventListener('submit', () => {
    const userCompany = document.querySelector('#company');
    const userPosition = document.querySelector('#position');
    const userSalary = document.querySelector('#salary');
    const userLast3MonthSlr = document.querySelector('#last3MonthSlr');
    const phoneName = document.querySelector('#phoneName');
    const phonePrice = document.querySelector('#price');
    const phoneQuantity = document.querySelector('#quantity');
    const creditAmount = document.querySelector('#creditAmount');
    const creditType = document.querySelector('#creditType');
    const creditTerm = document.querySelector('#creditTerm');
    const receivingPoint = document.querySelector('#receivingPoint');

    localStorage.setItem('userCompany', userCompany.value);
    localStorage.setItem('userPosition', userPosition.value);
    localStorage.setItem('userSalary', userSalary.value);
    localStorage.setItem('userLast3MonthSlr', userLast3MonthSlr.value);
    localStorage.setItem('phoneName', phoneName.value);
    localStorage.setItem('phonePrice', phonePrice.value);
    localStorage.setItem('phoneQuantity', phoneQuantity.value);
    localStorage.setItem('creditAmount', creditAmount.value);
    localStorage.setItem('creditType', creditType.value);
    localStorage.setItem('creditTerm', creditTerm.value);
    localStorage.setItem('receivingPoint', receivingPoint.value);

})