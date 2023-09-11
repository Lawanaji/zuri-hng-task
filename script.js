const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "wednesday", "thursday", "Friday", "saturday"]

const day = new Date();
const days = document.getElementById('days').innerHTML = daysOfTheWeek[day.getDay()];

const CurrentTime =  Date.now()
const  CurrentUtcTime = document.getElementById("CurrentUtcTime").innerHTML = CurrentTime;