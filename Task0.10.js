function findCommonLetters(str1, str2) {
  var a ="";
  for(let i=0;i<str1.length;i++) {
    for(let j=0; j<str2.length; j++) {
      if(str2[j]==str1[i]) {
        a+=str1[i]
      }
    }
      }
      return "Common letters: " + [...new Set(a)]
    }
console.log(findCommonLetters("comyputeeeers", "hyouse"))