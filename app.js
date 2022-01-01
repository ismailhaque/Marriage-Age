const name = document.querySelector(`#name`);
const year = document.querySelector(`#year`);
const gender = document.querySelector(`#gender`);
const result = document.querySelector(`#result`);
const button = document.querySelector(`#check`)

button.addEventListener(`click`, function (b) {
    b.preventDefault();

    if ( name.value == '' || year.value == '' || gender.value == 'select') {
        result.innerHTML = `<p class="alert alert-danger">ALL FILEDS ARE REQUIRED</p>`;
    } else {
        result.innerHTML = mage(name.value, year.value, gender.value);
    } 

    name.value = '';
    year.value = '';
    gender.value = 'select';
});