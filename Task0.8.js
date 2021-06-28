function convertToHoursAndMinutes(number) {
    var hours = Math.floor(number/60);
    var minutes = number%60; 
    if(number == 60) {
        console.log(hours + " hour, " + minutes + " minutes")
    } else if (minutes==1) {
        console.log(hours + " hour, " + minutes + " minute")
    } else {
        console.log(hours + " hours, " + minutes + " minutes")
    }
}   
    

convertToHoursAndMinutes(61)