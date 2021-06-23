function convertToHoursAndMinutes(number) {
    var hours = Math.floor(number/60);
    var minutes = number%60; 
    if(number == 60) {
        console.log(hours + " hour, " + minutes + " minutes")
    } else {
        console.log(hours + " hours, " + minutes + " minutes")
    }
}   
    

convertToHoursAndMinutes(60)