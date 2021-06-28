function findVowels(s){
    for(let i=0;i<s.length;i++) { 
        if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))){  
          if(s[i]=="a"|| s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i] =="u") {
            console.log("Vowel: " + s[i].toLowerCase())
        }
      }
    }  
  } 
  findVowels("Uuumuzi")