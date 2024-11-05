const inputSwitch = document.getElementById("btn-switch");

const anuallyP = document.querySelectorAll('.annualy');
const monthlyP = document.querySelectorAll('.monthly');

inputSwitch.addEventListener('change',() => {
    if(inputSwitch.checked){
        anuallyP.forEach(price => price.style.display = 'none');
        monthlyP.forEach(price => price.style.display = 'block');
        console.log("Input Switcheado");
        //Mostramos el valor de Monthly
    } else {
        anuallyP.forEach(price => price.style.display = 'block');
        monthlyP.forEach(price => price.style.display = 'none');
        console.log("Input desactivado");
    }
    
})