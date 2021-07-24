function convertToHoursAndMinutes(number) {
     var hours = Math.floor(number/60);
    var minutes = number%60; 
    if(hours == 1 && minutes == 1) {
      console.log(hours + " hour, " + minutes + " minute")
    } else if(hours == 1 && minutes > 1) {
      console.log(hours + " hour, " + minutes + " minutes")
    } else if(hours > 1 && minutes == 1) {
      console.log(hours + " hours, " + minutes + " minute")
    } else if(hours == 0 && minutes == 1) {
    console.log(hours + " hours, " + minutes + " minute")
    } else if(hours == 1 && minutes == 0) {
      console.log(hours + " hour, " + minutes + " minutes")
    } else {
      console.log(hours + " hours, " + minutes + " minutes")
    }
  }  
 
convertToHoursAndMinutes(60)