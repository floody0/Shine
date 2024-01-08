const allInputs = document.querySelectorAll('.form__input')
const login =  document.getElementById('form__login')
const password =  document.getElementById('form__password')
const permission = document.getElementById('form__checkbox')
const authButton = document.getElementById('authorization-button')

const userData =[{
    login: 'user1',
    password: '1234'
},
{
    login: 'user2',
    password: '4321'
}]

allInputs.forEach(element=>{
    element.addEventListener('focus', ()=>{
        element.style.border = '1px solid #C6C6C6';
        const label = document.querySelector(`[for="${element.id}"]`);
        label.style.display = 'none';
    })
})
authButton.addEventListener('click', (event)=>{
    event.preventDefault()
    let validation = true
    allInputs.forEach(element=>{
        if(element.value === '' ){
            const label = document.querySelector(`[for="${element.id}"]`);
            label.style.display = 'flex'
            validation = false
        }
    })
    if(validation){
        logining()
    }
})

const logining = () => {
    let found = false;

    userData.forEach(element => {
        if (element.login == login.value && element.password == password.value) {
            document.querySelector(`[for="form__login"]`).style.display = 'none';
            document.querySelector(`[for="form__password"]`).style.display = 'none';
            console.log(true);
            found = true;
            if(permission.checked){
                localStorage.setItem('auth', JSON.stringify({
                    login: login.value, password: password.value
                }) )
            }
            else{
                localStorage.removeItem('auth')
            }
            return;
        }
    });

    if (!found) {
        document.querySelector(`[for="form__login"]`).style.display = 'flex';
        document.querySelector(`[for="form__password"]`).style.display = 'flex';
        console.log(false);
    }
}
const auth = JSON.parse(localStorage.getItem('auth'))
console.log(auth)
if(auth){
    login.value= auth.login
    password.value = auth.password
}