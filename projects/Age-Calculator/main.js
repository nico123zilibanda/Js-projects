const btnEl = document.getElementById
("Btn");
const birthdayEl = document.getElementById
("Birthday");
const resultEl = document.getElementById
("result");

function calculateAge(){
    const birthdayValue = birthdayEl.
    value;
    if(birthdayValue === ""){
        alert("Please Enter Your Birthday");
    }else{
        let age = getAge(birthdayValue);
        resultEl.innerText = `Your Age is ${age} ${age > 1 ? "Years" : 
        "year"} Old`

    }
    
}
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date
    (birthdayValue);
    let age = currentDate.getFullYear
    () - birthdayDate.getFullYear();

    const month = currentDate.getFullYear
    () - birthdayDate.getMonth()

    if(
        month < 0 || 
        (month === 0 &&currentDate.getDate
            () < birthdayDate.getDate())
        ){
            age--;
        }
        return age;
}
btnEl.addEventListener("click",
    calculateAge
)