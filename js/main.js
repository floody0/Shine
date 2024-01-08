const menuIcon = document.querySelector('.menu__icon');
const headerMenu = document.querySelector('.header__menu');


menuIcon.addEventListener('click', ()=>{
    headerMenu.classList.toggle('_active')
    console.log(headerMenu.classList)
    menuIcon.classList.toggle('_active')
})

/*=========================================*/

const firstname = document.getElementById('input_name');
const lastname = document.getElementById('input_lastname');
const tel = document.getElementById('input_tel');
const city = document.getElementById('select_city');
const adress = document.getElementById('input_adress');
const services = document.getElementById('select_services');
const date = document.getElementById('input_date');
const button = document.getElementById('button');
const popUp = document.querySelector('.pop-up-wrapper')
const validLabel = document.querySelectorAll('.form-label-validation')
const allInputs = document.querySelectorAll('.validation')

const formItem = document.querySelectorAll('.form__item')
const servicesSelect = document.getElementById('select_services')
const employeesSelect = document.getElementById('form__select-employee')

formItem.forEach(element=>{
   if( element.querySelector('.form__input')){
       element.querySelector('.form__input').addEventListener('focus', ()=>{
           element.querySelector('.validation').style.border='1px solid #C6C6C6';
           element.querySelector('.form-label-validation').style.display='none';
       })
   }
})
services.addEventListener('change', ()=>{
    const value = services.value
    if(value == 1){
        employeesSelect.innerHTML = `
        <option value="Анна" selected>Анна</option>
        `
    }
    if(value == 2){
        employeesSelect.innerHTML = `
        <option value="Галіна">Галіна</option>
        `
    }
    if(value == 3){
        employeesSelect.innerHTML = `
        <option value="Михайло">Михайло</option>
        `
    }
    if(value == 4){
        employeesSelect.innerHTML = `
        <option value="Євген">Євген</option>
        `
    }
    if(value == 5){
        employeesSelect.innerHTML = `
        <option value="Артем">Артем</option>
        `
    }
})
function validationDate(date){
    const currentDate = new Date()
    const localDate = new Date(date)
    if(localDate >= currentDate) return true
    return false
}
button.addEventListener('click', (event)=>{
    let validation = true
    if(!validationDate(date.value)){
        validation = false
    }
    event.preventDefault();
    formItem.forEach(element=>{
        if(element.querySelector('.form__input') && element.querySelector('.form__input').value==''){
            element.querySelector('.form__input').style.border='1px solid red'
            element.querySelector('.form-label-validation').style.display='flex'
            validation = false
        }
        else if(element.querySelector('.form__input')){
            element.querySelector('.form__input').style.border='1px solid #C6C6C6'
            element.querySelector('.form-label-validation').style.display='none'
        }
    })
    const data = {
        firstName: firstname.value,
        lastname: lastname.value,
        tel: tel.value,
        city: city.options[city.selectedIndex].text,
        adress: adress.value,
        services: services.options[services.selectedIndex].text,
        date: date.value,
        employee: employeesSelect.value
    }
    if(validation){
        console.log(data)
        popUp.style.display='flex'
        localStorage.setItem('formData', JSON.stringify(data))
    }
})
console.log(JSON.parse(localStorage.getItem('formData')))
/*===========================================================================*/
