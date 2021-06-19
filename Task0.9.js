function findVowels(str) {
    var vowels = ["a", "e", "i", "o", "u", "A", "E","I","O","U"];
    for(var a=0; a<str.split("").length; a++) {
        if (vowels.includes(str.split("")[a])) {
            console.log("Vowel: " + str.split("")[a].toLowerCase()); 
            }   
        }
    }
findVowels("Uuuuiii")
 