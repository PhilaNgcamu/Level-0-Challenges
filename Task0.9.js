function findVowels(str) {
    var strArr = [...str].sort();
    var repeatedChars = [];
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i + 1] || strArr[i]) {
            if(strArr[i]=="a"|| strArr[i]=="e" || strArr[i]=="i" || strArr[i]=="o" || strArr[i]=="u" ||
             strArr[i]=="A"|| strArr[i]=="E" || strArr[i]=="I" || strArr[i]=="O" || strArr[i]=="U") {
                repeatedChars.push(strArr[i].toLowerCase());
        }
    }
  }
  return "Vowels: " + [...new Set(repeatedChars)].toString();
} 
console.log(findVowels("Umuzi"));
