const checkInDate = document.querySelector("#checkInDate");

const currentDate = new Date();
const currentDay = currentDate.getDate().toString();
const currentMonth = (currentDate.getMonth() + 1).toString();
const currentYear = currentDate.getFullYear().toString().slice(-2);

const dateValue = currentDay.concat("/ ", currentMonth.concat("/ ", currentYear));

checkInDate.value = "13/3/2333";


checkInDate.addEventListener('click', function(){
   alert(currentYear);
});

const newDay = document.querySelector("#showDate");
const newMonth = document.querySelector("#showMonth");
const newYear = document.querySelector("#showYear");
newDay.innerHTML = currentDay;
for(let i = 0; i < 10; i++){
   if(currentMonth <= 9){
      newMonth.innerHTML = "0" + currentMonth;
   }
   else{
      newMonth.innerHTML = currentMonth;
   }
}
newYear.innerHTML = currentYear;

