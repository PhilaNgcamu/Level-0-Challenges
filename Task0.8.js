function convertToHoursAndMinutes(number) {
    var hours = Math.floor(number/60);
    var minutes = number%60;
    return hours + " hours, " + minutes + " minutes" ;
}

console.log(convertToHoursAndMinutes(3606))